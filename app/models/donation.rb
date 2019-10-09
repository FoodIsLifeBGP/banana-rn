class Donation < ApplicationRecord
	belongs_to :store
	belongs_to :vendor, through: :store
	has_many :claims
end
