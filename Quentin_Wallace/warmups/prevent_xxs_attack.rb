
require 'pry'

list = {
  '&' => '&amp;',
  '<' => '&lt;',
  '>' => '&gt;',
  '"' => '&quot;',
  "'" => '&#x27;',
  '/' => '&#x2F;'}

# 'hello'.gsub(/[eo]/, 'e' => 3, 'o' => '*')

clean = '<script>alert("error")</script>'.gsub(/[&<>"'\/]/, '&' => '&amp;', '<' => '&lt;', '>' => '&gt;', '"' => '&quot;', "'" => '&#x27;', '/' => '&#x2F;')

binding.pry

# attack_array = attack.split('').to_a

# clean = []

# attack_array.each_with_index do |elem, index|

#   if attack_array[index] = elem

#     clean[index] = list[elem]

#   else

#     clean[index] = elem

#   end

# end

# puts clean