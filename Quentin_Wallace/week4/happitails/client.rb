# Client:

# A client should have a name.
# A client should have a number of children.
# A client should have an age.
# A client should have a number of pets.

class Client
  attr_accessor :name, :age, :children, :pets

  def initialize(name, age, children, pets)
    @name = name
    @age = age
    @children = children
    @pets = pets
  end

  def to_s
    "#{@name} is a #{@age} years old, has #{@children} and #{@pets}"
  end

  
end