import railsAxios from '@util/railsAxios';
import getEnv from '@util/environment';

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

const { USER_IDENTITY } = getEnv();
const CREATE_URL = `/${USER_IDENTITY}s/create`;

export const registerDonor = async (store, donor: DonorRegisterProps) => {
	const {
		organizationName, email, password, license, street, city, state, zip,
	} = donor;
	try {
		const response = await railsAxios().post(CREATE_URL, JSON.stringify({
			[USER_IDENTITY]: {
				email,
				password,
				organization_name: organizationName,
				business_license: license,
				address_street: street,
				address_city: city,
				address_zip: zip,
				address_state: state,
			},
		}));

		await store.setState({
			jwt: response.data?.jwt || '',
			user: donor,
		});
		return response.request.status || 'Error';
	} catch (error) {
		await store.setState({
			jwt: '',
			user: {},
		});
		return 500;
	}
};

export const registerClient = async (store, client: ClientRegisterProps) => {
	const {
		email, password, street, city, state, zip, transportationMethod, ethnicity, gender,
	} = client;
	try {
		const response = await railsAxios().post(CREATE_URL, JSON.stringify({
			[USER_IDENTITY]: {
				email,
				password,
				address_street: street,
				address_city: city,
				address_zip: zip,
				address_state: state,
				transportation_method: transportationMethod,
				ethnicity,
				gender,
			},
		}));

		await store.setState({
			jwt: response.data?.jwt || '',
			user: client,
		});
		return response.request.status || 'Error';
	} catch (error) {
		await store.setState({
			jwt: '',
			user: {},
		});
		return 500;
	}
};

export default (store, user) => {
	switch (USER_IDENTITY) {
		case 'donor': registerDonor(store, user); break;
		case 'client':
		default: registerClient(store, user); break;
	}
};
