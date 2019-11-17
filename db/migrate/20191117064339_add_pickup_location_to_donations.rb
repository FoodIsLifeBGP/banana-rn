class AddPickupLocationToDonations < ActiveRecord::Migration[6.0]
  def change
    add_column :donations, :pickup_location, :string
  end
end
