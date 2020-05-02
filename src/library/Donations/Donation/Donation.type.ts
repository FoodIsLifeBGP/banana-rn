export type Claim = {
	claim: {
		address: string;
		created_at: Date;
		canceled: boolean;
		client_id: number;
		completed: boolean;
		donation: Donation['donation'];
		donor: string;
		id: number;
		qr_code: string;
	};
};

export interface Donation {
	donation: {
		claims: Claim['claim'][] | [];
		created_at: Date;
		donor_id: number;
		duration_minutes: number;
		food_name: string;
		id: number;
		image_url: string;
		measurement: string;
		per_person: number;
		pickup_location: string;
		total_servings: number;
	};
}
