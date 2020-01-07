interface IDonorState {
	organization_name: string;
	business_license: string;
}

interface IClientState {
	transportation_method: string;
	ethnicity: string;
	gender: string;
}

interface ISharedProps {
	email: string;
	password: string;
	address_street: string;
	address_city: string;
	address_state: string;
	address_zip: number;
	account_status: string;
}

interface IClaim {
	client_id: number;
	donation_id: number;
	qr_code: string;
	completed: boolean;
	created_at: Date;
	updated_at: Date;
	time_claimed: Date;
	canceled: boolean;
}

interface IDonation {
	food_name: string;
	measurement: string;
	per_person: number;
	total_servings: number;
	donor_id: number;
	duration_minutes: number;
	image_url: string;
	created_at: Date;
	updated_at: Date;
	canceled: boolean;
	pickup_location: string;
}

export type DonorState = IDonorState;
export type ClientState = IClientState;
export type SharedProps = ISharedProps;
export type Claim = IClaim;
export type Donation = IDonation;
