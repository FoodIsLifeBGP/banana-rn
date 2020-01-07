import railsAxios from '@util/railsAxios';

interface DonorRegisterProps {
	organizationName: string;
	email: string;
	password: string;
	license: string;
	street: string;
	city: string;
	state: string;
	zip: number;
}

interface ClientRegisterProps {
	email: string;
	password: string;
	street: string;
	city: string;
	state: string;
	zip: number;
	transportationMethod: string;
	ethnicity: string;
	gender: string;
}

export const registerDonor = async (store, donor: DonorRegisterProps) => {
	const { createUrl, userIdentity } = store.state;
	const {
		organizationName, email, password, license, street, city, state, zip,
	} = donor;
	try {
		const response = await railsAxios().post(createUrl, JSON.stringify({
			[userIdentity]: {
				email,
				password,
				organization_name: organizationName,
				business_license: license,
				address_street: street,
				address_city: city,
				address_zip: zip,
				address_state: state,
				account_status: 'pending',
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
		email, password, street, city, state, zip, transportationMethod, ethnicity, gender,
	} = client;
	try {
		const response = await railsAxios().post(createUrl, JSON.stringify({
			[userIdentity]: {
				email,
				password,
				address_street: street,
				address_city: city,
				address_zip: zip,
				address_state: state,
				transportation_method: transportationMethod,
				ethnicity,
				gender,
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
	const statusCode = userIdentity === 'donor'
		? await registerDonor(store, user)
		: await registerClient(store, user);
	return statusCode;
};

export { register };
