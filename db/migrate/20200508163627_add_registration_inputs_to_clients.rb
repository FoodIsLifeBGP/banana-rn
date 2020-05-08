class AddRegistrationInputsToClients < ActiveRecord::Migration[6.0]
  def change
    add_column :clients, :document_id, :integer
    add_column :clients, :phone_number, :string
    add_column :clients, :profile_pic_link, :string
    remove_column :clients, :transportation_method, :string
  end
end
