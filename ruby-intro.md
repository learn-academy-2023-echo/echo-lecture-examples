# Ruby Intro 8/9/2023

MINASWAN - matz is nice and so we are nice

### Overview of the Language

- Dynamic - dynamically typed, can make variables with whatever data type and you can change the data type of a variable (opposite: statically type)
- Interpreted - code is processed line-by-line (opposite: compiled)
- Open-source - the source code is free to be used by anyone
- Scripting language - logic and evaluations, no user interface
- OOP (object-oriented programming) - everything is an object, everything is an instance of a class

### Running Ruby

- Ruby code can be run directly in the terminal
- Ruby from a file
- All Macs come with Ruby
- rvm - Ruby version manager
- `ruby -v` will tell you the version you are on (should be 3.2)
- irb - into console
- exit - takes you out

### Data Types

- Integers - whole numbers
- Floats - partial numbers, if you want a float returned you have to introduce one to the equation
- String - single quotes
- Boolean
  - relational
  - equality == (no triple equal sign in Ruby)
  - logical && ||
- nil - equal to nothing else

```ruby
➜  echo-lecture-examples git:(ruby-intro) ✗ irb
 :001 > 1 + 2
 => 3
 :002 > 3 - 2
 => 1
 :003 > 4 * 3
 => 12
 :004 > 4 / 2
 => 2
 :005 > 3 ** 3
 => 27
 :006 > 4 % 3
 => 1
 :007 > 4 / 3
 => 1
 :008 > 1.0
 => 1.0
 :009 > 4 / 3.0
 => 1.3333333333333333
 :010 > 'Hello'
 => "Hello"
 :011 > "Hello y'all"
 => "Hello y'all"
 :012 > true
 => true
 :013 > false
 => false
 :014 > 7 > 8
 => false
 :015 > 5 < 8
 => true
 :016 > 5 <= 4
 => false
 :017 > 4 >= 9
 => false
 :018 > 4 == 4
 => true
 :019 > 5 == '5'
 => false
 :020 > 5 == 5 && 'hi' == 'hi'
 => true
 :021 > 'hi' == 'hi' || 9 + 3
 => true
 :022 > 'hi' == 'hi' || 9 ==  3
 => true
 :023 > 'hi' == 'hi' || 9 == 3
 => true
 :024 > nil
 => nil
 :025 > my_name = 'sarah'
 => "sarah"
 :026 > my_name
 => "sarah"
 :027 > "Hey there #{my_name}"
 => "Hey there sarah"
 :028 > my_name.length
 => 5
 :029 > my_name.upcase
 => "SARAH"
 :030 > my_name.capitalize
 => "Sarah"
 :031 > my_name.reverse
 => "haras"
 :032 > my_name.delete'h'
 => "sara"
 :033 > my_name.delete('h')
 => "sara"
 :034 > my_name.include?('s')
 => true
 :035 > my_name.class
 => String
 :036 > true.class
 => TrueClass
 :037 > string.class
(irb):37:in `<main>': undefined local variable or method `string' for main:Object (NameError)
Did you mean?  String
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.7.4/exe/irb:9:in `<top (required)>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
 :038 > 'hi'.class
 => String
 :039 > false.class
 => FalseClass
 :040 > nil.class
 => NilClass
 :041 > 1.class
 => Integer
 :042 > 1.0.class
 => Float
 :043 > 1.upcase
(irb):43:in `<main>': undefined method `upcase' for 1:Integer (NoMethodError)
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.7.4/exe/irb:9:in `<top (required)>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
 :044 > 4.to_s
 => "4"
 :045 > '9'.to_i
 => 9
 :046 > 'hi'.to_i
 => 0
 :047 > my_name
 => "sarah"
 :048 > my_name = my_name.capitalize
 => "Sarah"
 :049 > my_name
 => "Sarah"
 :050 > my_name.upcase!
 => "SARAH"
 :051 > my_name
 => "SARAH"
 :052 > my_name.downcase.first
(irb):52:in `<main>': undefined method `first' for "sarah":String (NoMethodError)
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.7.4/exe/irb:9:in `<top (required)>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
 :053 > my_name.downcase
 => "sarah"
 :054 > my_name.downcase.first
(irb):54:in `<main>': undefined method `first' for "sarah":String (NoMethodError)
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.7.4/exe/irb:9:in `<top (required)>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
 :055 > my_name.downcase.include?('s')
 => true
 :056 > my_name.include?('s').downcase
(irb):56:in `<main>': undefined method `downcase' for false:FalseClass (NoMethodError)
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.7.4/exe/irb:9:in `<top (required)>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
 :057 > my_name
 => "SARAH"
 :058 > my_nums = [4, 5, 6, 7, 8]
 => [4, 5, 6, 7, 8]
 :059 > my_nums.length
 => 5
 :060 > my_nums[0]
 => 4
 :061 > my_nums[8]
 => nil
 :062 > my_nums[-1]
 => 8
 :063 > my_nums.first
 => 4
 :064 > my_nums.reverse
 => [8, 7, 6, 5, 4]
 :065 > my_nums
 => [4, 5, 6, 7, 8]
 :066 > my_nums[0] = 100
 => 100
 :067 > my_nums
 => [100, 5, 6, 7, 8]
 :068 > my_nums << 99
 => [100, 5, 6, 7, 8, 99]
```
