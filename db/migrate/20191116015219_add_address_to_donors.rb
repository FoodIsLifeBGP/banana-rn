class AddAddressToDonors < ActiveRecord::Migration[6.0]
  def change
    add_column :donors, :address_street, :string
    add_column :donors, :address_city, :string
    add_column :donors, :address_state, :string
    add_column :donors, :address_zip, :integer
  end
end
