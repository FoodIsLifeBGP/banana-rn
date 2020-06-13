export default {
	email: {
		presence: {
			allowEmpty: false,
		},
		email: true,
	},
	password: {
		length: {
			minimum: 8,
			message: 'must be at least 8 characters',
		},
		presence: {
			allowEmpty: false,
		},
	},
};