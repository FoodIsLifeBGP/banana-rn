class DropStores < ActiveRecord::Migration[6.0]
  def change
    drop_table :stores
  end
end
