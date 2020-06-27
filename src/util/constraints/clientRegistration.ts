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
			pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@^_`{|}~]{8,25}$/,
		},
		presence: {
			allowEmpty: false,
		},
	},
	retypedPassword: {
		equality: 'password',
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
};
