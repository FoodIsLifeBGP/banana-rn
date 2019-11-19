class Donation < ApplicationRecord
	belongs_to :donor
	has_many :claims

	validates :food_name, presence: true
	validates :measurement, presence: true
	validates :per_person, presence: true
	validates :total_servings, presence: true
	validates :donor_id, presence: true
	validates :duration_minutes, presence: true
	validates :pickup_location, presence: true
end
