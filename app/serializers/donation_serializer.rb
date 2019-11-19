class DonationSerializer < ActiveModel::Serializer
  attributes :id,
    :canceled,
    :created_at,
    :donor_id,
    :duration_minutes,
    :food_name,
    :image_url,
    :measurement,
    :per_person,
    :pickup_location,
    :total_servings

end
