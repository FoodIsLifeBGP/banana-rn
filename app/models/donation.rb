class Donation < ApplicationRecord
	belongs_to :donor
	has_many :claims
end
