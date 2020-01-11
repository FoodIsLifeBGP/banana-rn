import railsAxios from '@util/railsAxios';

export const scan = async ({ qrCode, jwt }) => {
	try {
		const response = await railsAxios(jwt).post('/donors/scan', {
			qr_code: qrCode,
		});
		return response.status;
	} catch (error) {
		console.log(error);
		return 500;
	}
};
