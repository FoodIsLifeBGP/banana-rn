class ClaimSerializer < ActiveModel::Serializer
  attributes :id,
    :donation_id,
    :client_id,
    :qr_code,
    :completed,
    :canceled
end
