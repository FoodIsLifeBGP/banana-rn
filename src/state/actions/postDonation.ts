import railsAxios from '@util/railsAxios';

interface DonationProps {
	cancel?: boolean;
	donationId?: number;
	donorId: number;
	durationInMinutes: number;
	imageUrl?: string;
	jwt: string;
	name: string;
	perPerson: string | number;
	servingName: string;
	pickupLocation: string;
	totalServings: string | number;
}

const postDonation = async (_store, { jwt }) => {
	const endpoint = `/donations/${donationId ? `${donationId}/update` : 'create'}`;
	const donation = JSON.stringify({
		donation: {
			food_name: name,
			donor_id: donorId,
			duration_minutes: durationInMinutes,
			total_servings: totalServings,
			measurement: servingName,
			per_person: perPerson,
			image_url: '',
			pickup_location: pickupLocation,
			canceled: cancel,
		},
	});

	try {
		const response = await railsAxios(jwt).post(endpoint, donation);

		return response.request.status || 'Error';
	} catch (error) {
		console.log(error);
		return 500;
	}
};

export { postDonation };
