class RemoveStartTimeFromDonations < ActiveRecord::Migration[6.0]
  def change

    remove_column :donations, :start_time, :string
  end
end
