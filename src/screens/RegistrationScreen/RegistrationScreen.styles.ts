import { StyleSheet, Dimensions } from 'react-native';
import * as colors from '@util/colors';

const inputHeight = 35;

export default StyleSheet.create({
	outerContainer: {
		backgroundColor: colors.BANANA_YELLOW,
		paddingHorizontal: '10%',
		justifyContent: 'space-between',
	},
	input: {
		height: inputHeight,
		marginBottom: 14,
		paddingLeft: 10,
		fontSize: 16,
		fontFamily: 'open-sans-light',
		color: colors.NAVY_BLUE,
		backgroundColor: 'white',
	},
	text: {
		fontFamily: 'open-sans-light',
		fontSize: 14,
		marginTop: 4,
		color: colors.NAVY_BLUE,
	},
	checkboxRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkBox: {
		backgroundColor: 'white',
		borderRadius: Dimensions.get('window').width / 2,
	},
	passwordContainer: {
		height: inputHeight,
		flexDirection: 'row',
		backgroundColor: 'white',
		marginBottom: 10,
	},
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 40,
		height: inputHeight,
		backgroundColor: 'white',
	},
	iconPadding: {
		paddingRight: 35,
	},
	icon: {
		fontSize: 24,
		color: colors.NAVY_BLUE,
	},
	row: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	chevronIcon: {
		color: colors.NAVY_BLUE,
		fontSize: 37,
	},
});
