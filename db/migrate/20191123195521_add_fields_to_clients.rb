class AddFieldsToClients < ActiveRecord::Migration[6.0]
  def change
    add_column :clients, :address_street, :string
    add_column :clients, :address_city, :string
    add_column :clients, :address_state, :string
    add_column :clients, :address_zip, :integer
    add_column :clients, :account_status, :string
    add_column :clients, :transportation_method, :string
    add_column :clients, :ethnicity, :string
    add_column :clients, :gender, :string
  end
end