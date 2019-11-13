class Vendor < ApplicationRecord
	has_secure_password

	has_many :stores
	has_many :donations, through: :stores

	has_secure_password
	validates :admin_email, uniqueness: { case_sensitive: false }
end
