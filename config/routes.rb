Rails.application.routes.draw do
  root 'donations#active'
  
  post 'donor_auth', to: 'donor_auth#create'
  get 'donors/:id/donations', to: 'donors#show'
  post 'donors/create', to: 'donors#create'
  get 'donors/:id/:status', to: 'donors#account_status'

  post 'donations/create', to: 'donations#create'
  post 'donations/:id/update', to: 'donations#update'
  
  get 'clients/:id/donations', to: 'clients#get_donations'

  post 'admin_auth', to: 'admin_auth#create'

  post 'claims/create', to: 'claims#create'
  patch 'claims/:id/update', to: 'claims#update'

  resources :donors, except: [:delete]
  resources :donations, except: [:delete]
  resources :claims, except: [:delete]
  resources :clients, except: [:delete]
end
