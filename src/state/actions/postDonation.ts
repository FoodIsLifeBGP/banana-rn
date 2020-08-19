import railsAxios from '@util/railsAxios';
import { NewDonation } from '@screens/DashboardScreen/DonationScreen/DonationScreen.type';


const postDonation = async (_store, donation: NewDonation) => {
	const endpoint = '/donations/create';
	const { user, jwt } = _store.state;
	const payload = {
		donation: {
			donor_id: user.id,
			category: donation.category,
			food_name: donation.itemName,
			pickup_instructions: donation.pickupInstructions,
			status: 'active',
			total_amount: donation.totalAmount,
		},
	};
	try {
		const response = await railsAxios(jwt).post(endpoint, payload);
		return response.request.status || 'Error';
	} catch (error) {
		console.log(error);
		return 500;
	}
};

export { postDonation };
