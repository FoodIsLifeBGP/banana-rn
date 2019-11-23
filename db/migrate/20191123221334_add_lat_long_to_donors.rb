class AddLatLongToDonors < ActiveRecord::Migration[6.0]
  def change
  	add_column :donors, :latitude, :decimal
    add_column :donors, :longitude, :decimal
  end
end
