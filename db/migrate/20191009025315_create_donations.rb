class CreateDonations < ActiveRecord::Migration[6.0]
  def change
    create_table :donations do |t|
      t.string :food_name
      t.string :measurement
      t.integer :per_person
      t.integer :total_servings
      t.integer :store_id
      t.datetime :start_time
      t.integer :duration_minutes
      t.string :image_url
      t.string :pickup_location

      t.timestamps
    end
  end
end
