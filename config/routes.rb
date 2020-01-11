Rails.application.routes.draw do
  root 'donations#active'

  get 'donors/:id/get_donations', to: 'donors#get_donations'
  get 'donors/:id/:status', to: 'donors#account_status'
  post 'donor_auth', to: 'donor_auth#create'
  post 'donors/create', to: 'donors#create'
  post 'donors/scan', to: 'donors#scan_qr_code'

  post 'donations/create', to: 'donations#create'
  post 'donations/:id/update', to: 'donations#update'
  post 'donations/:id/claim', to: 'donations#make_claim'
  
  post 'client_auth', to: 'client_auth#create'
  post 'clients/create', to: 'clients#create'
  get 'clients/:id/donations', to: 'clients#get_donations'
  get 'clients/:id/get_claims', to: 'clients#get_claims'

  post 'admin_auth', to: 'admin_auth#create'

  post 'claims/create', to: 'claims#create'
  patch 'claims/:id/update', to: 'claims#update'
end
