class Claim < ApplicationRecord
	belongs_to :client
	belongs_to :donation
end
