class DonorSerializer < ActiveModel::Serializer
  attributes :id,
    :account_status,
    :address_street,
    :address_city,
    :address_state,
    :address_zip,
    :business_license,
    :email,
    :organization_name,
    :password_digest,
    :pickup_location
end
