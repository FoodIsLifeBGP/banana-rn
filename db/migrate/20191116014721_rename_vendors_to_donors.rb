class RenameVendorsToDonors < ActiveRecord::Migration[6.0]
  def change
    rename_table :vendors, :donors
  end
end
