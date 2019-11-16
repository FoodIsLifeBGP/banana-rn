class ChangeDonationStoreIdToDonorId < ActiveRecord::Migration[6.0]
  def change
    rename_column :donations, :store_id, :donor_id
  end
end
