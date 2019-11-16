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
	pickup_location: "Front desk"
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
	canceled: false
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
	canceled: true
)

puts "Seeding Clients..."
client1 = Client.create!(
	email: "client@example.com",
	password: "password",
	first_name: "Example",
	last_name: "Client"
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
