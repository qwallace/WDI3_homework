# Animal:

# An animal should have a name.
# An animal should have an age.
# An animal should have a gender.
# An animal should have a species.
# An animal can have multiple toys.

class Animal
  attr_accessor :name, :age, :gender, :species, :toy

  def initialize(name, age, gender, species, toy)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toy = toy
  end

  def to_s
    "#{@name} is a #{@age} year old #{@gender} #{@species} and has a #{@toy}"
  end

end