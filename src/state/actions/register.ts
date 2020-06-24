import railsAxios from '@util/railsAxios';

export interface DonorRegisterProps {
	email: string;
	password: string;
	retypedPassword: string;
	firstName: string;
	lastName: string;
	businessName: string;
	businessAddress: string;
	city: string;
	state: string;
	zip: string;
	pickupInstructions: string;
	// license: string
	// licenseVerificationImage: any
}

export interface ClientRegisterProps {
	email: string;
	password: string;
	retypedPassword: string;
	firstName: string;
	lastName: string;
	// street: string;
	// city: string;
	// state: string;
	// zip: string;
	// transportationMethod: string;
	// ethnicity: string;
	// gender: string;
}

export const registerDonor = async (store, donor: DonorRegisterProps) => {
	const { createUrl, userIdentity } = store.state;
	const {
		email, password, firstName, lastName, businessName, businessAddress, city, state, zip, pickupInstructions,
	} = donor;
	try {
		const response = await railsAxios().post(createUrl, JSON.stringify({
			[userIdentity]: {
				email,
				password,
				first_name: firstName,
				last_name: lastName,
				organization_name: businessName,
				address_street: businessAddress,
				address_city: city,
				address_state: state,
				address_zip: zip,
				account_status: 'pending',
				pickup_instructions: pickupInstructions,
			},
		}));

		await store.setState({
			jwt: response.data?.jwt || '',
			user: donor,
		});
		return response.status || 'Error';
	} catch (error) {
		// TODO: testing with expo on your phone, error.response is undefined
		if (error.response && error.response.status === 409) {
			return 409;
		}
		// TODO: once the server side validations are in place we'll need to look for failed validations in the response
		// for now to my knowledge there's only three possible responses--201 donor created, 409 donor email is already
		// registered, and 500 and unhandled rails error
		await store.setState({
			jwt: '',
			user: {},
		});
		return 500;
	}
};

export const registerClient = async (store, client: ClientRegisterProps) => {
	const { createUrl, userIdentity } = store.state;
	const {
		email, password, firstName, lastName,
	} = client;
	try {
		const response = await railsAxios().post(createUrl, JSON.stringify({
			[userIdentity]: {
				email,
				password,
				first_name: firstName,
				last_name: lastName,
				account_status: 'pending',
			},
		}));
		await store.setState({
			jwt: response.data?.jwt || '',
			user: client,
		});
		const { status } = response;
		return status || 'Error';
	} catch (error) {
		await store.setState({
			jwt: '',
			user: {},
		});
		return 500;
	}
};

const register = (store, user) => {
	const { userIdentity } = store.state;
	return userIdentity === 'donor'
		? registerDonor(store, user)
		: registerClient(store, user);
};

export { register };
