class Vendor < ApplicationRecord
	has_many :stores
	has_many :donations, through: :stores
end
