class Donation < ApplicationRecord
	belongs_to :store
	has_many :claims
end
