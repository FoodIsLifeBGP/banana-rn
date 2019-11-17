class DonationSerializer < ActiveModel::Serializer
  attributes :id,
    :canceled,
    :claims,
    :donor_id,
    :food_name,
    :image_url,
    :measurement,
    :per_person,
    :pickup_location,
    :total_servings

  def claims
    ActiveModel::SerializableResource.new(object.claims, each_serializer: ClaimSerializer)
  end
end
