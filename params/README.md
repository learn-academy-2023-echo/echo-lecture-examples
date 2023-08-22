## Params Lecture 8/22/2023

Parameters are content added to the URL. It is a way of passing information to the controller method.

# Hard Coded Tacos

Create an instance variable with a hard-coded value

```ruby
    def tacos
    @my_taco = 'al pastor'
    end
```

Create the view called tacos.html.erb

```html
<h1>We like Tacos!</h1>

<h2>I like <%= @my_taco %> tacos!!!</h2>
```

Create the route

```ruby
get '/tacos' => 'home#tacos'
```

The browser will render our data.

# Tacos as Params

Create an instance variable that looks for a value from params

```ruby
    def tacos
    @my_taco = params[:my_taco]
    end
```

Pass params to the URL by assigning my_taco to a value

http://localhost:3000/tacos?my_taco=zofritas

The browser will render our data.

# Tacos as Params with Routes

Update the route to expect a param

```ruby
get '/tacos/:my_taco' => 'home#tacos'
```

http://localhost:3000/tacos/zofritas

The browser will render our data.

# Multiple Params

Create two instance variables that look for values from params

```ruby
    def numbers
        @num1 = params[:num1]
        @num2 = params[:num2]
    end
```

Create a route that expects two params

```ruby
  get '/numbers/:num1/:num2' => 'home#numbers'
```

In the browser pass two params
http://localhost:3000/numbers/42/36

Parameters are a hash, we can see how they are stored in the Rails log in the terminal:

Started GET "/numbers/42/36" for ::1 at 2022-10-11 13:54:07 -0700
Processing by HomeController#numbers as HTML
Parameters: {"num1"=>"42", "num2"=>"36"}
Can perform logic on the instance variables

update the numbers method in Home controller

```ruby
    def numbers
       if @num1.to_i < @num2.to_i
        @output = "You Win!!  Ta da!🎉"
      elsif @num1.to_i > @num2.to_i
        @output = "I Win!  Take that!"
      else
        @output = "We tied. Boring!"
      end
    end
```

Update the view

numbers.html.erb

```html
<h1>Numbers!</h1>
<br />
<h3>This is number 1: <%= @num1 %></h3>
<h3>This is number 2: <%= @num2 %></h3>
<br />
<h2><%= @output %></h2>
```
