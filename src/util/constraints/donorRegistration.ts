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