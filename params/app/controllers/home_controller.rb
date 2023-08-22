class HomeController < ApplicationController

  def tacos
    @my_taco = params[:my_taco]
  end

  def numbers
    @num1 = params[:num1]
    @num2 = params[:num2]

    if @num1.to_i < @num2.to_i
      @output = "You Win!!  Ta da!🎉"
    elsif @num1.to_i > @num2.to_i
      @output = "I Win!  Take that!"
    else
      @output = "We tied. Boring!"
    end
  end
end
