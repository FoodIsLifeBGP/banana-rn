class AddApplyStatusesToDonors < ActiveRecord::Migration[6.0]
  def change
    add_column :donors, :has_applied, :boolean, default: false
    add_column :donors, :is_approved, :boolean, default: false
  end
end
