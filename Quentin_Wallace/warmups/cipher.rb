
# Quiz - Decode this message!

# Write a program to decode this message:

# **FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK
# EXW RQFH.**

# This is a form of cryptography known as the Caesar Cipher. It has a **shift parameter** of **3**.

# The alphabet is normally:

# ABCDEFGHIJKLMNOPQRSTUVWXYZ

# The alphabet with the shift parameter of 3 is now as follows:

# DEFGHIJKLMNOPQRSTUVWXYZABC

require 'pry'


# def decipher(string)

  string = 'FRZDUGV'

  string_array = string.split('')

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  alpha_array = alphabet.split('')

  sub_array = alpha_array.shift(3)

  alpha_array.push(sub_array).flatten

  # DT code below

  a1 = ('A'..'Z').to_a

  a2 = ('A'..'Z').to_a.rotate(-3)

  lookup = {}

  a2.each_with_index do |elem, index|
    lookup[a1[index]] = elem
  end










# end

binding.pry