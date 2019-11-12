class Vendor < ApplicationRecord
	has_many :stores
	has_many :donations, through: :stores

	has_secure_password
	validates :username, uniqueness: { case_sensitive: false }
end
