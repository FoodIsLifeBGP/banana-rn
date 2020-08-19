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
				pickup_instructions: pickupInstructions,
			},
		}));

		await store.setState({
			jwt: response.data?.jwt || '',
			user: response.data?.donor || {},
		});
		return response.status;
	} catch (error) {
		await store.setState({
			jwt: '',
			user: {},
		});
		return error.response.status;
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
			},
		}));
		await store.setState({
			jwt: response.data?.jwt || '',
			user: response.data?.client || {},
		});
		return response.status;
	} catch (error) {
		await store.setState({
			jwt: '',
			user: {},
		});
		return error.response.status;
	}
};

const register = (store, user) => {
	const { userIdentity } = store.state;
	return userIdentity === 'donor'
		? registerDonor(store, user)
		: registerClient(store, user);
};

export { register };
