Rails.application.routes.draw do
  root 'donations#active'
  post 'donor_auth', to: 'donor_auth#create'
  resources :donors, except: [:delete]
  resources :donations, except: [:delete]
  resources :claims, except: [:delete]
  resources :clients, except: [:delete]
end
