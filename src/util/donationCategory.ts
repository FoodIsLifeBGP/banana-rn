export const categoryImage = (donationCategory: string): ImageData => {
	switch (donationCategory) {
		case 'Produce':
			return require('@assets/images/Stock-image-produce.png');
		case 'Bread':
			return require('@assets/images/Stock-image-bread.png');
		case 'Hot Meal':
			return require('@assets/images/Stock-image-meals.png');
		case 'Protein':
			return require('@assets/images/Stock-image-protein.png');
		case 'Dairy':
			return require('@assets/images/Stock-image-dairy.png');
		default:
			return require('@assets/images/Stock-image-others.png');
	}
};
