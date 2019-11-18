import railsAxiosAuth from './railsAxiosAuth';

interface DonationProps {
	id: number;
	jwt: string;
	name: string;
	sixtyMinuteLimit: boolean;
	totalServings: string;
	servingName: string;
	perPerson: string;
	pickupLocation: string;
	}

export default async ({
	id, jwt, name, sixtyMinuteLimit, totalServings, servingName, perPerson, pickupLocation,
}: DonationProps) => {
	const response = await railsAxiosAuth(jwt).post('/donations/create', JSON.stringify({
		donation: {
			food_name: name,
			duration_minutes: sixtyMinuteLimit ? 60 : 30,
			total_servings: totalServings,
			measurement: servingName,
			per_person: perPerson,
			image_url: '',
			donor_id: id,
			pickup_location: pickupLocation,
			canceled: false,
		},
	}));
	console.log(response)

	return response.request.status || 'Error';
};
