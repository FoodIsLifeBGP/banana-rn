class ClientSerializer < ActiveModel::Serializer
  attributes :id,
    :account_status,
    :address_street,
    :address_city,
    :address_state,
    :address_zip,
    :email,
    :transportation_method
end
