# Ruby Classes and Objects Notes 8/10/2023

# keyword class to define class, class names are PascalCase
# end closes the scope of the class

class Hulu
end

# p Hulu.new
#<Hulu:0x0000000104ae25e0>

# p Hulu.new
# p Hulu.new
# p Hulu.new
# p Hulu.new
#<Hulu:0x00000001042d22d8>
#<Hulu:0x00000001042d1db0>
#<Hulu:0x00000001042d1c48>
#<Hulu:0x00000001042d1b08>

# cruel_summer = Hulu.new
# p cruel_summer

# Want classes to do two things:
# 1. hold data
# 2. retrieve that data

# getters and setters

# class Hulu
#   # creating a setter method and passing in parameter
#   def set_show_data(title, actor)
#     # create instance variable and it uses the @ to denote itself and set it to value of parameter
#     @actor = actor
#     @title = title
#   end
# end

# cruel_summer = Hulu.new
# cruel_summer.set_show_data('Cruel Summer', 'Someone Cool')
# p cruel_summer
# #<Hulu:0x00000001007615a0 @title="Cruel Summer">

# futurama = Hulu.new
# futurama.set_show_data('Futurama', 'Bender')
# p futurama

#<Hulu:0x0000000100170e98 @title="Cruel Summer", @actor="Someone Cool">
#<Hulu:0x0000000100170970 @title="Futurama", @actor="Bender">

# Getters

# class Hulu
  # def set_show_data(title, actor)
#     @actor = actor
#     @title = title
#   end

#   def get_title
#     @title
#   end

#   def get_actor
#     @actor
#   end
# end

# instantiates the class and sets object to variable
# ahs = Hulu.new
# # we call set_show_data method on said variable to populate object
# ahs.set_show_data('American Horror Story', 'Jessica Lange')
# p ahs
# # call the get_actor method to return only the actor
# p ahs.get_actor

#<Hulu:0x00000001009909e8 @actor="Jessica Lange", @title="American Horror Story">
# "Jessica Lange"

#  Initializer - special kind of setter that's called by .new

# class Hulu
#   def initialize(title, actor)
#     @title = title
#     @actor = actor
#     @watched = false
#   end

#   def get_title
#     @title
#   end

#   def get_actor
#     @actor
#   end

#   def has_watched
#     @watched = true
#   end
# end

# buffy = Hulu.new('Buffy', 'SMG')
# p buffy.get_actor
# buffy.has_watched
# p buffy

#<Hulu:0x00000001021501c8 @title="Buffy", @actor="SMG", @watched=true>

# attr_accessor 
#  pass symbols of our instance variable :  you get a getter and a setter for each variable

class Hulu
  attr_accessor :title, :actor, :watched

  def initialize(title, actor)
    @title = title
    @actor = actor
    @watched = false
  end
# allows us to eliminate the getter methods we established earlier - they are built in
  def show_info
    if @watched
      "you have watched #{@title} starring #{@actor}"
    else 
      "Why have you have not watched #{@title}"      
    end
  end
end

office = Hulu.new('The Office', 'Steve Carrell')
p office.title
# "The Office"

office.title = 'Parks and Rec'
p office.title

p office.show_info
office.watched = true
p office.show_info