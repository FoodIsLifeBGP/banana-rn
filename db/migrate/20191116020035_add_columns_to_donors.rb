class AddColumnsToDonors < ActiveRecord::Migration[6.0]
  def change
    add_column :donors, :business_license, :string
  end
end
