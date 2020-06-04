import railsAxios from '@util/railsAxios';
import clientConstraints from '@util/constraints/clientRegistration';
import donorConstraints from '@util/constraints/donorRegistration';
import validate from 'validate.js';

interface DonorRegisterProps {
	email: string;
	password: string;
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

interface ClientRegisterProps {
	email: string;
	password: string;
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

const register = async (store, user) => {
	const { userIdentity } = store.state;
	const formErrors = userIdentity === 'donor'
		? await validate(user, donorConstraints)
		: await validate(user, clientConstraints);
	if (formErrors) return { formErrors };
	const statusCode = userIdentity === 'donor'
		? await registerDonor(store, user)
		: await registerClient(store, user);
	return { formErrors, statusCode };
};

export { register };
