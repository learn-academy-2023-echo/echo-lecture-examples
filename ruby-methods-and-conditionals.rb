# Ruby Conditionals and Methods 8/9/2023

# Methods

# functions is Ruby are called methods

# 2 keywords to create a Ruby method
  #  def - starts method 
  #  end - ends our method/ closes the block 
  # EVERY DEF HAS AN END 

  # def greeter
  #   'Hello Echo!'
  # end

  # p greeter
  # output ---> "Hello Echo!"

  # Implicit return - Ruby methods will automatically return the last line of method unless we say otherwise.

  def greeter name
    "Hello #{name}!"
  end

  # p greeter 'Kiana'
  # # output ---> "Hello Kiana!"
  # p greeter 'Raquel'
  # # output ---> "Hello Raquel!"
  # p greeter 'Peter'
  # output ---> "Hello Peter!"

  # def mult_products (num1, num2)
  #   num1 * num2
  # end

  # p mult_products(24, 3)
  # p mult_products(32, 2)
  # p mult_products(3, 7)

  # Conditions 

  # if starts our condtional, takes an evaluation, returns a boolean value
  # end closes out the code 
  # EVERY IF HAS AN END 

  # if 7 + 8 == 15 
  #   p 'the answer is 15'
  # end

# output ---> "the answer is 15"

# else is catchall, and doesn't take an evaluation

# if 7 + 8 == 16 
#   p 'the answer is 15'
# else 
#   p 'no conditions in this statement evaluate to true'
# end

# output ----> "no conditions in this statement evaluate to true"

# elsif used when there are other conditions to consider, takes an evaluation, can have as many as you need

# if 7 + 8 == 16 
#   p 'is the answer 16?'
# elsif 7 + 8 == 17
#   p 'is the answer 17?'
# elsif 7 + 8 == 18
#   p 'is the answer 18?'
# elsif 7 + 8 == 15
#   p 'is the answer 15?'
# else 
#   p 'no conditions in this statement evaluate to true'
# end

# output ---> "is the answer 15?"


# my_name = 'Chillith Willith'

# if my_name == 'Chillith Willith'
#   p 'Hi there, Chillith Willith'
# else 
#   p "Hi there, #{my_name}"
# end 


# gets is method that stops the execution of the program and waits for the uses to type something and hit enter (returns a string)

# my_name = gets
# p my_name
# output ---> "Bao\n"

# my_name = gets.chomp
# p my_name

# if my_name == 'Chillith Willith'
#   p 'Hi there, Chillith Willith'
# else 
#   p "Hi there, #{my_name}"
# end 

def greater_num (num1, num2)
  if num1 > num2
    "#{num1} is greater"
  elsif num2 > num1
    "#{num2} is greater"
  else
    "#{num1} and #{num2} are equal."
  end
end

# p greater_num(73, 14)
# p greater_num(123, 123)
# p greater_num(23, 35)


puts 'Please enter your Name'
user_name = gets.chomp 
p user_name

puts 'Please enter your Age'
user_age = gets.chomp.to_i
p user_age

def can_you_drink(name, age)
  if age >= 21
    "Hi #{name}! #{age} is old enough to drink, get lit (responsibly)!"
  else
    "Hi #{name}! #{age} is not old enough to drink, but kombucha will put some hair on your chest. "
  end
end

p can_you_drink(user_name, user_age)
