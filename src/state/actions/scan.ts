import railsAxios from '@util/railsAxios';

export const scan = async (_store, qrCode) => {
	try {
		const { jwt } = _store.state;
		const response = await railsAxios(jwt).post('/donors/scan', {
			qr_code: qrCode,
		});
		return response.status;
	} catch (error) {
		console.log(error);
		return 500;
	}
};
