
require 'pry'

class School
  # attr_reader :db

  def initialize(name)
    @name = name
    @db = {}
  end

  def db
    @db   
  end

  def add(name, grade)

    @db[grade] ||= [] # shorthand for lines 20 to 22

    # if @db[grade] == nil
    #   @db[grade] = []
    # end

    @db[grade] << name # or could use @db[grade].push
  end

  def grade(number)
    @db[number]
  end

end