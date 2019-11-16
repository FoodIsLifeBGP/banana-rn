# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Donor.destroy_all

puts "Seeding Donors..."
donor1 = Donor.create(
	organization_name: "QFC",
	admin_email: "admin@qfc.com",
	password: "plaintext",
	address_street: "101 Main St",
	address_city: "Seattle",
	address_state: "WA",
	address_zip: 98101,
	business_license: "9198DD435AS3456",
	account_status: "active",
)
