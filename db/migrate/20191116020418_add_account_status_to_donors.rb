class AddAccountStatusToDonors < ActiveRecord::Migration[6.0]
  def change
    add_column :donors, :account_status, :string
  end
end
