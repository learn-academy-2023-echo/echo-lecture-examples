# RUBY HASHES LECTURE 8/10/2023

# Hash - a collection of custom key:value pairs 
  # key - a unique identifier, data type is a symbol 
  # value - associated with the key and can be any data type recognised by Ruby

  crystal_gems = { gem1: 'Pearl', gem2: 'Garnet', gem3: 'Amathyst'}

  # p crystal_gems
  # output --> {:gem1=>"Pearl", :gem2=>"Garnet", :gem3=>"Amathyst"}

  # .new is a method used to create a new instance of the class Hash

  # fusions = Hash.new
  # p fusions
  # output --> {}

  # CRUD (Create, Read, Update, and Delete)

  # READ - return all of the data in the hash

  p crystal_gems # {:gem1=>"Pearl", :gem2=>"Garnet", :gem3=>"Amathyst"}

  p crystal_gems[:gem2] # "Garnet"

  # Create - creates new content

  fusions = Hash.new
  # p fusions # {}

  # Update - making changes or modifications to the exisiting data 

  crystal_gems[:gem4] = 'Bismuth'

  # p crystal_gems # {:gem1=>"Pearl", :gem2=>"Garnet", :gem3=>"Amathyst", :gem4=>"Bismuth"}

 crystal_gems[:fusion1] = crystal_gems.delete(:gem2)

#  p crystal_gems # {:gem1=>"Pearl", :gem3=>"Amathyst", :gem4=>"Bismuth", :fusion1=>"Garnet"}

crystal_gems[:gem3] = 'Amethyst'
# p crystal_gems # {:gem1=>"Pearl", :gem3=>"Amethyst", :gem4=>"Bismuth", :fusion1=>"Garnet"}

fusions[:fusion1] = 'Obsidian'

p fusions # {:fusion1=>"Obsidian"}

# Delete - removing or deleting existing data

crystal_gems.delete(:fusion1)
# p crystal_gems # {:gem1=>"Pearl", :gem3=>"Amethyst", :gem4=>"Bismuth"}


# Modules - the grouping od things that a have similar properties 

#  Enumerables - grouping of things that can be iterated on. 
  # Arrays
  # Ranges 
  # Hashes

# Duck Typing - "If it walks like a duck and quacks like a duck, then it's duck"

steven_universe = { dad: 'Greg', mom: 'Rose Quartz', bestie: 'Connie', home_town: 'Beach City'}

# steven_universe.each do |key, value|
#   p " #{value} is Steven's #{key}"
# end 

# output --> 
# " Greg is Steven's dad"
# " Rose Quartz is Steven's mom"
# " Connie is Steven's bestie"
# " Beach City is Steven's home_town"

# def stevens_life hash
#   hash.map do |key, value|
#     " #{value} is Steven's #{key}"
#   end 
# end 

# p stevens_life(steven_universe)

# output --> [" Greg is Steven's dad", " Rose Quartz is Steven's mom", " Connie is Steven's bestie", " Beach City is Steven's home_town"]

# p stevens_life(crystal_gems) 
# output --> [" Pearl is Steven's gem1", " Amethyst is Steven's gem3", " Bismuth is Steven's gem4"]

# p stevens_life(fusions) # [" Obsidian is Steven's fusion1"]

p stevens_life(steven_universe[:mom])

# output : ruby_hashes.rb:76:in `stevens_life': undefined method `map' for "Rose Quartz":String (NoMethodError)
# Did you mean?  tap

# reason: this is bc steven_universe[:mom] is the value of the which is a string but our method is looking for a hash. 
