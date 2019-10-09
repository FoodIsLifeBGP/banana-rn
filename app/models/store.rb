class Store < ApplicationRecord
	belongs_to :vendor
	has_many :donations
	has_many :claims, through: :donations
end
