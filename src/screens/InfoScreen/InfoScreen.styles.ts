import { StyleSheet } from 'react-native';
import * as colors from '../../util/colors';

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: colors.BANANA_YELLOW,
		paddingHorizontal: '11%',
	},
	input: {
		height: 50,
		marginBottom: 15,
	},
	documentContainer: {
		backgroundColor: 'white',
		paddingHorizontal: '5%',
	},
	documentText: {
		fontFamily: 'open-sans-regular',
		color: colors.NAVY_BLUE,
		fontSize: 13,
		textAlign: 'justify',
	},
});
