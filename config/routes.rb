Rails.application.routes.draw do
  root 'donations#active'
  post 'donor_auth', to: 'donor_auth#create'
  get 'donors/:id/donations', to: 'donors#show'
  post 'donors/create', to: 'donors#create'
  post 'donors/:id/:status', to: 'donors#account_status'
  
  resources :donors, except: [:delete]
  resources :donations, except: [:delete]
  resources :claims, except: [:delete]
  resources :clients, except: [:delete]
end
