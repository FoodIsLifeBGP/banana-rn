export const categoryImage = (donationCategory: string) => {
	switch (donationCategory) {
		case 'Produce':
			return require('@assets/images/produce-stock-image.png');
		case 'Bread':
			return require('@assets/images/bread-stock-image.png');
		case 'Hot Meal':
			return require('@assets/images/meals-stock-image.png');
		case 'Protein':
			return require('@assets/images/protein-stock-image.png');
		case 'Dairy':
			return require('@assets/images/dairy-stock-image.png');
		default:
			return require('@assets/images/others-stock-image.png');
	}
};
