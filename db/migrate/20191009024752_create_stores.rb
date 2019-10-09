class CreateStores < ActiveRecord::Migration[6.0]
  def change
    create_table :stores do |t|
      t.string :name
      t.hstore :address
      t.integer :vendor_id

      t.timestamps
    end
  end
end
