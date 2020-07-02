export default {
	email: {
		presence: {
			allowEmpty: false,
		},
		email: true,
	},
	password: {
		format: {
			message: `Minimum eight and maximum 10 characters,
			at least one uppercase letter, one lowercase letter, one number and one special character:`,
			pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/,
		},
		presence: {
			allowEmpty: false,
		},
	},
	retypedPassword: {
		equality: 'password',
	},
	firstName: {
		presence: {
			allowEmpty: false,
		},
	},
	lastName: {
		presence: {
			allowEmpty: false,
		},
	},
	businessName: {
		presence: {
			allowEmpty: false,
		},
	},
	businessAddress: {
		presence: {
			allowEmpty: false,
		},
		format: {
			pattern: /^[a-zA-Z0-9\s,'-]*$/,
		},
	},
	city: {
		presence: {
			allowEmpty: false,
		},
	},
	state: {
		presence: {
			allowEmpty: false,
		},
	},
	zip: {
		presence: {
			allowEmpty: false,
		},
		format: {
			pattern: /^\d{5}$/,
			message: '^Please enter a valid ZIP code',
		},
	},
	pickupInstructions: {
		presence: {
			allowEmpty: false,
		},
	},
};
