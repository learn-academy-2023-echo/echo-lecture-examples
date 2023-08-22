Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

# HTTP verb / 'route(URL)' / 'controller#method'

get '/landing' => 'home#landing'
root 'home#landing'

get '/greeter' => 'home#greeter'

get '/game' => 'home#game'

get '/game_recs' => 'home#game_recs'



end
