class HomeController < ApplicationController

  def greeter
    render html: 'Hey Echo!'
  end 

  def game
    render html: 'Echo\'s game of the day: Hades'
  end

  def game_recs
    @recommendations = 'Here are some recommendations to checkout'
    @games = ['Starfield', 'Sonic', 'Pacman', 'Venba', 'Red Dead Redemption']
  end

  def landing 
  end
end
