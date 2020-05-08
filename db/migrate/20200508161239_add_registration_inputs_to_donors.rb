class AddRegistrationInputsToDonors < ActiveRecord::Migration[6.0]
  def change
    add_column :donors, :first_name, :string
    add_column :donors, :last_name, :string
    add_column :donors, :phone_number, :string
    add_column :donors, :business_phone_number, :string
    add_column :donors, :business_doc_id, :integer
    add_column :donors, :profile_pic_link, :string
    rename_column :donors, :pickup_location, :pickup_instructions
  end
end
