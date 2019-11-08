class Vendor < ApplicationRecord
	has_secure_password

	has_many :stores
	has_many :donations, through: :stores
end
