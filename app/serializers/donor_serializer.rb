class DonorSerializer < ActiveModel::Serializer
  attributes :id,
    :account_status,
    :address_street,
    :address_city,
    :address_state,
    :address_zip,
    :business_license,
    :donations,
    :email,
    :organization_name,
    :pickup_location
end
