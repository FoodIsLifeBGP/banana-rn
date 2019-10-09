Rails.application.routes.draw do
  root 'donations#active'
  resources :vendors
  resources :stores
  resources :donations
  resources :claims
  resources :clients
end
