# sandbox for debugging and playing with code

require 'active_record'
require 'pry'

# Show the sql in the terminal
ActiveRecord::Base.logger = Logger.new(STDERR)

require_relative 'config'
require_relative 'movie'

binding.pry