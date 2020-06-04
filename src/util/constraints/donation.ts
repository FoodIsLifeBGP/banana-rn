export default {
	image: {
		presence: {
			allowEmpty: true,
		},
	},
	itemName: {
		presence: {
			allowEmpty: false,
		},
	},
	category: {
		presence: {
			allowEmpty: false,
		},
	},
	totalAmount: {
		allowEmpty: false,
	},
	pickupAddress: {
		allowEmpty: false,
	},
	pickupInstructions: {
		allowEmpty: false,
	},
};