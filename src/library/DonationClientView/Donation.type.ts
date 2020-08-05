
export interface Donation {
	category: string;
	created_at: Date;
	donor_id: number;
	duration_minutes: number;
	food_name: string;
	id: number;
	image_url: string;
	measurement: string;
	per_person: number;
	pickup_location: string;
	total_amount: number;
	status: string;
	distance: number;
	donor: {
		donor_name: string;
	};
}
