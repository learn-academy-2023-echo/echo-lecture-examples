Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/tacos/:rachel' => 'home#tacos'
  get '/numbers/:num1/:num2' => 'home#numbers'
end
