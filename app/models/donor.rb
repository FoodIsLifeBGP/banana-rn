class Donor < ApplicationRecord
	has_secure_password

	has_many :donations
	has_many :claims, through: :donations
	
	validates :email, uniqueness: { case_sensitive: false }
	validates :password, presence: true
	validates :business_license, presence: true
	validates :address_street, presence: true
	validates :address_city, presence: true
	validates :address_state, presence: true
	validates :address_zip, presence: true
	validates :terms_of_service, acceptance: true
end
