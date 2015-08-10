require 'pry'

class Queens

  attr_accessor :white, :black

  def initialize(coordinates = { white: [0, 3], black: [7, 3] })

    @white = coordinates[:white]
    @black = coordinates[:black]

    if @white[0] == @black[0] && @white[1] == @black[1]
      raise ArgumentError
    end

  end



end