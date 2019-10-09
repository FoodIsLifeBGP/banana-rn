class CreateVendors < ActiveRecord::Migration[6.0]
  def change
    create_table :vendors do |t|
      t.string :organization_name
      t.string :admin_email
      t.string :password_hash

      t.timestamps
    end
  end
end
