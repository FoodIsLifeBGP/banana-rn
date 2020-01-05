Rails.application.routes.draw do
  root 'donations#active'
  
  # resources :donors, except: [:delete]
  # resources :donations, except: [:delete]
  # resources :claims, except: [:delete]
  # resources :clients, except: [:delete]

  post 'donor_auth', to: 'donor_auth#create'
  get 'donors/:id/donations', to: 'donors#get_donations'
  post 'donors/create', to: 'donors#create'
  get 'donors/:id/:status', to: 'donors#account_status'

  post 'donations/create', to: 'donations#create'
  post 'donations/:id/update', to: 'donations#update'
  
  post 'client_auth', to: 'client_auth#create'
  post 'clients/create', to: 'clients#create'
  get 'clients/:id/donations', to: 'clients#get_donations'
  get 'clients/:id/claims', to: 'clients#claims'

  post 'admin_auth', to: 'admin_auth#create'

  post 'claims/create', to: 'claims#create'
  patch 'claims/:id/update', to: 'claims#update'
end
