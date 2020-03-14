import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

export default StyleSheet.create({
	headerContainer: {
		paddingHorizontal: '10%',
	},
	outerContainer: {
		flex: 1,
		backgroundColor: colors.BANANA_YELLOW,
	},
	contentContainer: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: 'white',
	},
	lineItem: {
		borderBottomWidth: 1,
		borderBottomColor: colors.LIGHT_GRAY,
	},
});
