# Sum of Multiples

# If we list all the natural numbers below 10 that are multiples of 3 or 5,
# we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Write a program that, given a number, can find the sum of all the multiples
# of 3 or 5 up to and including that number.

# Allow the program to be configured to find the sum of multiples of numbers
# other than 3 and 5.

def multiples(number)
  total = 0
  for i in 0..(number - 1)
    if i % 3 == 0 && i % 5 == 0
      total += i
      puts "#{i}"
    elsif i % 3 == 0
      total += i
      puts "#{i}"
    elsif i % 5 == 0
      total += i
      puts "#{i}"
    else
      puts 'Number not divisible by 3 or 5'
    end
  end
  puts "Total is #{total}"
end

multiples(50)