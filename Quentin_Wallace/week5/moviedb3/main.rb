
require 'pry'     
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'pg'
# require 'active_record'
require 'uri'

require_relative 'config'
require_relative 'movie'

after do # so we don't run out of database connections

  ActiveRecord::Base.connection.close

end

get '/' do

   @movie_name = params[:movie_name]

  if @movie_name && !@movie_name.empty?

    # @movie = "The title of the movie is #{@movie_name}"

    # result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock_name)

    @result = HTTParty.get(URI.escape("http://omdbapi.com/?s=#{@movie_name}"))

    @search = @result['Search']

    # @movie = result["Title"]

    # @plot = result["Plot"]

    # @poster = result["Poster"]


  end

  erb :index

end

get '/movies/:id' do

  if !Movie.where(imdbid: params[:id]).empty? # find movie in db

    # create instance variable of movie details
    @movie = Movie.where(imdbid: params[:id]).first

  else

    @movie_details = HTTParty.get("http://omdbapi.com/?i=#{ params[:id] }")

    # add movie to db

    Movie.create(title: @movie_details['Title'], year: @movie_details['Year'], rating: @movie_details['Rated'], released: @movie_details['Released'], runtime: @movie_details['Runtime'], genre: @movie_details['Genre'], director: @movie_details['Director'], actors: @movie_details['Actors'], plot: @movie_details['Plot'], poster_url: @movie_details['Poster'], imdbid: @movie_details['imdbID'])

    # title,year,rating,released,runtime,genre,director,actors,plot,poster_url,imdbid

    # creat instance varioable of movie details

    @movie = Movie.where(imdbid: params[:id]).first

  end

  erb :movie

end





