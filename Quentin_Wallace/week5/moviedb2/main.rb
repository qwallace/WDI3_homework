     
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'pg'
require 'active_record'
require 'uri'

get '/' do

   @movie_name = params[:movie_name]

  if @movie_name && !@movie_name.empty?

    # @movie = "The title of the movie is #{@movie_name}"

    # result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock_name)

    @result = HTTParty.get("http://omdbapi.com/?s=#{@movie_name}")

    @search = @result['Search']

    # @movie = result["Title"]

    # @plot = result["Plot"]

    # @poster = result["Poster"]


  end

  erb :index

end

get '/movies/:id' do

  @movie_details = HTTParty.get("http://omdbapi.com/?i=#{ params[:id] }")

  erb :movie

end





