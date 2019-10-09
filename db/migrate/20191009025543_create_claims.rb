class CreateClaims < ActiveRecord::Migration[6.0]
  def change
    create_table :claims do |t|
      t.integer :client_id
      t.integer :donation_id
      t.string :qr_code
      t.boolean :completed

      t.timestamps
    end
  end
end
