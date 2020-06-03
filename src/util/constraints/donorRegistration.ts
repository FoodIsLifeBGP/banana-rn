export default {
	email: {
		presence: {
			allowEmpty: false,
		},
		email: true,
	},
	organizationName: {
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
	password: {
		length: {
			minimum: 8,
			message: 'must be at least 8 characters',
		},
		presence: {
			allowEmpty: false,
		},
	},
	license: {
		length: {
			is: 9,
			tooShort: 'needs 9 digits',
		},
		presence: {
			allowEmpty: true,
		},
	},
	image: {
		presence: {
			allowEmpty: true,
		},
	},
	street: {
		presence: {
			allowEmpty: false,
		},
		format: {
			pattern: /^\d+\s+.+\s+.+$/,
		},
	},
	city: {
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
};