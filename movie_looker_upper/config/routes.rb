Rails.application.routes.draw do
  root 'static#index'
  get '/static/:id' => 'static#show'
end
