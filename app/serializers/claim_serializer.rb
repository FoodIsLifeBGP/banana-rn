class ClaimSerializer < ActiveModel::Serializer
  attributes :id,
    :address,
    :canceled,
    :client_id,
    :completed,
    :created_at,
    :donor,
    :donation,
    :qr_code,
    :updated_at
end
