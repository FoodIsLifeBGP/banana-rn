class Donor < ApplicationRecord
	has_secure_password

	has_many :donations
	has_many :claims, through: :donations
	accepts_nested_attributes_for :claims
	
	validates :organization_name, presence: true
	validates :email, uniqueness: { case_sensitive: false }
	validates :business_license, presence: true
	validates :address_street, presence: true
	validates :address_city, presence: true
	validates :address_state, presence: true
	validates :address_zip, presence: true
	#TODO: add operation hours ??

	geocoded_by :address
	after_validation :geocode
	def address
		[address_street, address_city, address_state, "US"].compact.join(', ')
	end
end
