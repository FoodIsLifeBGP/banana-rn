Rails.application.routes.draw do
  root 'donations#active'
  resources :donors, except: [:delete]
  resources :donations, except: [:delete]
  resources :claims, except: [:delete]
  resources :clients, except: [:delete]
end
