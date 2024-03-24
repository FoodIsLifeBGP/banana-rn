export const categoryImage = (donationCategory: string) => {
  switch (donationCategory) {
  case 'Produce':
    return require('@assets/images/image-stock-produce.png');
  case 'Bread':
    return require('@assets/images/image-stock-bread.png');
  case 'Hot Meal':
    return require('@assets/images/image-stock-meals.png');
  case 'Protein':
    return require('@assets/images/image-stock-protein.png');
  case 'Dairy':
    return require('@assets/images/image-stock-dairy.png');
  default:
    return require('@assets/images/image-stock-others.png');
  }
};
