Claim.destroy_all
Donation.destroy_all
Client.destroy_all
Donor.destroy_all

puts "Seeding Donors..."
donor1 = Donor.create!(
	organization_name: "Example",
	email: "donor@example.com",
	password: "password",
	address_street: "101 Main St",
	address_city: "Seattle",
	address_state: "WA",
	address_zip: 98101,
	business_license: "9198DD435AS3456",
	account_status: "active",
	pickup_location: "Front desk",
	has_applied: true,
	is_approved: true,
)
donor2 = Donor.create!(
	organization_name: "Unapproved",
	email: "approve@me.com",
	password: "approve",
	address_street: "202 Main St",
	address_city: "Seattle",
	address_state: "WA",
	address_zip: 98101,
	business_license: "DSJ0984DFGK32",
	account_status: "pending",
	pickup_location: nil,
	has_applied: true,
	is_approved: false,
)
donor3 = Donor.create!(
	organization_name: "Hasn't Applied",
	email: "please@apply.com",
	password: "apply",
	address_street: nil,
	address_city: nil,
	address_state: nil,
	address_zip: nil,
	business_license: nil,
	account_status: "pending",
	pickup_location: nil,
	has_applied: false,
	is_approved: false,
)

puts "Seeding Donations..."
donation1 = Donation.create!(
	food_name: "Bananas",
	measurement: "bunch",
	per_person: 1,
	total_servings: 20,
	start_time: Time.now,
	duration_minutes: 60,
	image_url: "",
	donor_id: donor1.id,
	pickup_location: donor1.pickup_location,
	canceled: false,
)
donation2 = Donation.create!(
	food_name: "Apples",
	measurement: "Apple",
	per_person: 4,
	total_servings: 6,
	start_time: Time.now,
	duration_minutes: 30,
	image_url: "",
	donor_id: donor1.id,
	pickup_location: donor1.pickup_location,
	canceled: true,
)

puts "Seeding Clients..."
client1 = Client.create!(
	email: "client@example.com",
	password: "password",
	first_name: "Example",
	last_name: "Client",
)

puts "Seeding Claims..."
claim1 = Claim.create!(
	client_id: client1.id,
	donation_id: donation1.id,
	qr_code: "qrcode",
	completed: false,
	time_claimed: Time.now,
	canceled: false,
)
claim2 = Claim.create!(
	client_id: client1.id,
	donation_id: donation2.id,
	qr_code: "qrcode",
	completed: false,
	time_claimed: nil,
	canceled: true,
)
claim3 = Claim.create!(
	client_id: client1.id,
	donation_id: donation2.id,
	qr_code: "qrcode",
	completed: false,
	time_claimed: nil,
	canceled: true,
)

puts "Finished with no errors"
