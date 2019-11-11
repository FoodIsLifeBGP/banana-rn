import { StyleSheet } from 'react-native';
import * as colors from '../../../src/util/colors';

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
    backgroundColor: colors.BANANA_YELLOW,
		paddingHorizontal: '10%',
	},
	input: {
		height: 28,
		marginBottom: 15,
		backgroundColor: 'white',
		borderRadius: 0,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		paddingLeft: 10,
	},
	text: {
		fontFamily: 'open-sans-light',
		fontSize: 14,
		color: colors.NAVY_BLUE,
	}
});
