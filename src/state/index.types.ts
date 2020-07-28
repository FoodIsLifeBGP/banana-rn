export interface DonorState {
	organization_name: string;
	business_license: string;
}

export interface ClientState {
	transportation_method: string;
	ethnicity: string;
	gender: string;
}

export interface SharedProps {
	email: string;
	password: string;
	address_street: string;
	address_city: string;
	address_state: string;
	address_zip: string;
	account_status: string;
	coords: {
		latitude?: number;
		longitude?: number;
	};
}

export interface Claim {
	client_id: number;
	donation_id: number;
	qr_code: string;
	completed: boolean;
	created_at: Date;
	updated_at: Date;
	time_claimed: Date;
	canceled: boolean;
}

export interface Donation {
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

/**
 * An alert to be displayed to the user.
 */
export interface Alert {
	/**
	 * Title of the alert.
	 */
	title: string;

	/**
	 * Type of the alert.
	 */
	type: 'default'|'incomplete form'|'coming soon'|'cancel donation';

	/**
	 * Message to the user.
	 */
	message: string;

	/**
	 * Whether the alert can be casually dismissed by the user
	 * (i.e. tapping the content behind a modal).
	 */
	dismissable?: boolean;
}

export interface InitialState {
	userIdentity: 'donor' | 'client';
	apiBaseUrl: string;
	loginUrl: string;
	createUrl: string;
	alert?: Alert;
	jwt?: string;
	user?: DonorState | ClientState | SharedProps;
	donationsOrClaims?: Donation[] | Claim[];
}

export interface StatusCode {
	code: 200 | 202 | 400 | 403 | 404 | 418 | 500;
}
