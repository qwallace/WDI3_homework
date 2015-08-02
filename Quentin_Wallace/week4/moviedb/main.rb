     
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do

   @movie_name = params[:movie_name]

  if @movie_name && !@movie_name.empty?

    # @movie = "The title of the movie is #{@movie_name}"

    # result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock_name)

    result = HTTParty.get("http://omdbapi.com/?t=#{@movie_name}")

    @movie = result["Title"]

    @plot = result["Plot"]

    @poster = result["Poster"]


  end

  erb :index

end





