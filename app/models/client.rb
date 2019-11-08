class Client < ApplicationRecord
	has_secure_password

	has_many :claims
end
