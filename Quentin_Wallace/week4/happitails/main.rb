require 'pry'

require_relative 'animal'
require_relative 'client'

shelter = {
  animals: {},
  clients: {}
}

    puts "Enter name"
    name = gets.chomp
    puts "Enter age"
    age = gets.chomp
    puts "Enter gender"
    gender = gets.chomp
    puts "Enter species"
    species = gets.chomp
    puts "Enter toy"
    toy = gets.chomp

    shelter[:animals][name] = Animal.new(name, age, gender, species, toy)

    # shelter[:animals][name.to_sym] = Animal.new(name, age, gender, species, toy)

    puts "Enter name"
    name = gets.chomp
    puts "Enter age"
    age = gets.chomp
    puts "Enter number of children"
    children = gets.chomp
    puts "Enter number of pets"
    pets = gets.chomp

    shelter[:clients][name] = Client.new(name, age, children, pets)

binding.pry

# shelter = { animals: {{}, {}}, clients: {{}, {}}

# File.open('database.txt', 'a+') do |file| # creates file or opens and appends data

  # print 'Do you want to add some data (y/n)'
  # response = gets.chomp.downcase

  # while response == 'y'
  #   print 'Add an animal (a) or client (c)'
  #   response = gets.chomp.downcase

  #   if response == a
  #     print 'Enter name, age, gender, species, toy'
  #     file.puts()

  #   elsif

  #   else

  #   end

  #   print 'Enter name, age, gender, species, toy: '
  #   response = gets.chomp

  #   file.puts(response)

  #   print 'Exit (y/n)'
  #   response = gets.chomp.downcase
  # end

# end



# animals = []

# # clients = []

# File.open('database.txt', 'r') do |file|
#   file.each do |line|
#     data = line.split(',')
#     animal = Animal.new(data[0], data[1], data[2], data[3], data[4])
#     animals << animal
#   end
# end