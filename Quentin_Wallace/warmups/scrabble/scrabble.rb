
# # Scrabble Score

# Write a program that, given a word, computes the scrabble score for that word.

# ```ruby
# Scrabble.score("cabbage")
# # => 14
# ```

# Your program should be in a file named `scrabble.rb`.

# ## Letter Values

# ```plain
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# ```


require 'pry'

class Scrabble

  def self.lookup(letter)
    letters = {
      'a' => 1,
      'b' => 2,
      'c' => 3
    }
    letters[letter]

  def self.score(word)
    # Code here
  end

end
