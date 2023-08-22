# Controllers, Routes, and Views

- **View**: is what the user sees

- **Controller**: It coordinates the interaction between the user, the views, and the model

- **Route**: the path to seeing something

- **URL**: **U**niform **R**esource **L**ocater

- The Flow: user sends request, route calls on controller, controller pulls appropriate data and its displayed on the view.

- Route calls the controller method, that then pulls the correct data from our model. and displays the right view
---
### Setup
- $ `rails new routes_controllers_views -d postgres -T`
- $ `cd routes_controllers_views` 
- $ `rails db:create` 
- $ `rails s` 
- $ `command + t`


### Controllers
- generate a controller with $ `rails g controller Home`

### Routes
- HTTP verb / location(URl) / hash rocket / controller(Home)# controller_method

### ERB Ruby syntax
- `<%=` with equal sign is for what we want diplayed `%>`
- `<%` without with preform ruby logic to not be diplayed `%>`

### Views
- **game_recs.html.erb** :
rails will look for this file when the control method `game_recs` is called because we named them the same.

- we called the instance variable of `@recommendations` holding the string "Here are some recommendations to checkout"

- we also called on the instance variable of `@games `that holds our array of games which we then iterated through and returned each movie in a list
