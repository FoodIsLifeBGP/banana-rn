Claim.destroy_all
Donation.destroy_all
Client.destroy_all
Donor.destroy_all

puts "Seeding Donors..."
donor1 = Donor.create!(
	organization_name: "Example",
	email: "donor@donor.com",
	password: "donor",
	address_street: "101 Main St",
	address_city: "Seattle",
	address_state: "WA",
	address_zip: 98101,
	business_license: "9198DD435AS3456",
	account_status: "active",
	pickup_location: "Front desk",
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
)
donor3 = Donor.create!(
	organization_name: "Approved",
	email: "donor@2.com",
	password: "donor",
	address_street: '111 Egg Ct',
	address_city: 'Seattle',
	address_state: 'WA',
	address_zip: 98312,
	business_license: "111222333",
	account_status: "pending",
	pickup_location: nil,
)

puts "Seeding Donations..."
donation1 = Donation.create!(
	food_name: "Bananas",
	measurement: "bunch",
	per_person: 1,
	total_servings: 20,
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
	duration_minutes: 30,
	image_url: "",
	donor_id: donor1.id,
	pickup_location: donor1.pickup_location,
	canceled: true,
)
donation3 = Donation.create!(
	food_name: "Bread",
	measurement: "Loaf",
	per_person: 1,
	total_servings: 10,
	duration_minutes: 60,
	image_url: "",
	donor_id: donor1.id,
	pickup_location: donor1.pickup_location,
	canceled: true,
)
donation4 = Donation.create!(
	food_name: "Apples",
	measurement: "Apple",
	per_person: 4,
	total_servings: 6,
	duration_minutes: 30,
	image_url: "",
	donor_id: donor1.id,
	pickup_location: donor1.pickup_location,
	canceled: true,
)
donation5 = Donation.create!(
	food_name: "Apples",
	measurement: "Apple",
	per_person: 4,
	total_servings: 6,
	duration_minutes: 30,
	image_url: "",
	donor_id: donor1.id,
	pickup_location: donor1.pickup_location,
	canceled: true,
)

puts "Seeding Clients..."

client1 = Client.create!(
	email: "c1@me.com",
	password: "password1",
	address_street: "1411 4th Ave",
	address_city: "Seattle",
	address_state: "Washington",
	address_zip: 98101,
	account_status: "active",
	transportation_method: "car",
	ethnicity: "Black or African American",
	gender: "Prefer Not to Answer",
)

client2 = Client.create!(
	email: "c2@me.com",
	password: "password2",
	address_street: "2901 3rd Ave",
	address_city: "Seattle",
	address_state: "Washington",
	address_zip: 98121,
	account_status: "pending",
	transportation_method: "walk",
	ethnicity: "White",
	gender: "Female"
)

client3 = Client.create!(
	email: "c3@me.com",
	password: "password3",
	address_street: "111 S Jackson St",
	address_city: "Seattle",
	address_state: "Washington",
	address_zip: 98104,
	account_status: "suspended",
	transportation_method: "bike",
	ethnicity: "Hispanic or Latino",
	gender: "Male"
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
