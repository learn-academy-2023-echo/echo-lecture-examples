# Ruby Blocks and Iterables  8/9/2023

##  Iteration

#while
#  - needs a starting and end points
#  - a condition starts as true and eventually will become false

# num = 1

# while num <= 10
#   p num
#   num += 1
# end

# must have way to update value or you get endless loop  boo  :(  
   #ctrl + c

# Methods for iteration
# take anonymous function ===> a BLOCK
# defined by:
#  - keywords do and end
  # - {} - you use when it's a one liner in ruby
#

## Times

# 8.times do
#   p 'Hello World!'
# end

# same result as:

# 8.times { p 'Hello World!'}

# run on variables

number = 10

# number.times do
#   p 'Hello Echo!'
# end

##  Each
# works on a list of items, so it needs an array

# nums = [3, 5, 8, 10]

# # nums.each do |value|
# #   p value
# # end

# nums.each do |value| #parameter in pipes
#   p value * 5
# end

## Ranges
# a list of values
# start point and end point separated by TWO dots
# ruby will fill in the rest (inclusive)

# p 1..10
# # 1..10

# range = 1..10
# p range
# # 1..10

# # range is used for iteration

# range.each do |value|
#   p value
# end
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10

# letters = 'a'..'l'
# letters.each do |value|
#   p value
# end

# "a"
# "b"
# "c"
# "d"
# "e"
# "f"
# "g"
# "h"
# "i"
# "j"
# "k"
# "l"

# p letters.to_a
# ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]

## MAP

nums = 1..10

# mapped = nums.map do |value|  # all these methods are followed by do then parameter in pipes
#   value * 3
# end

# # p mapped
# # [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

# mapped = nums.map do |value|
#   if value % 2 == 0
#     'even'
#   else
#     value
#   end
# end
# p mapped

# [1, "even", 3, "even", 5, "even", 7, "even", 9, "even"]

# mapped = nums.map do |value|
#   if value.even?
#     'even'
#   else
#     value
#   end
# end
# p mapped
# [1, "even", 3, "even", 5, "even", 7, "even", 9, "even"]

def even_or_odd array
  array.map do |value|
    if value.even?
      'even'
    else
      value
    end
  end
end

p even_or_odd 15..20

## SELECT

def only_evens array
  array.select do |value|
    value.even?
  end
end

p only_evens 10..20