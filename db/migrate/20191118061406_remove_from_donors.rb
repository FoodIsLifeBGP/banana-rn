class RemoveFromDonors < ActiveRecord::Migration[6.0]
  def change
    remove_column :donors, :has_applied
    remove_column :donors, :is_approved
  end
end
