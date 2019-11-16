class MovePickupLocationToDonors < ActiveRecord::Migration[6.0]
  def change
    remove_column :donations, :pickup_location
    add_column :donors, :pickup_location, :string
  end
end
