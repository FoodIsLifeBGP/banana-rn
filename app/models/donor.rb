class Donor < ApplicationRecord
	has_secure_password

	has_many :donations
	has_many :claims, through: :donations
	
	validates :admin_email, uniqueness: { case_sensitive: false }
end
