class AdminSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest
end
