class CancelingDonations < ActiveRecord::Migration[6.0]
  def change
    add_column :donations, :canceled, :boolean, default: false
    add_column :claims, :canceled, :boolean, default: false
  end
end
