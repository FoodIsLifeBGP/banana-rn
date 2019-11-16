class ChangeAdminEmailToEmailInDonors < ActiveRecord::Migration[6.0]
  def change
    rename_column :donors, :admin_email, :email
  end
end
