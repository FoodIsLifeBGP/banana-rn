import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: colors.BANANA_YELLOW,
		paddingHorizontal: '15%',
	},
	input: {
		height: 50,
		marginBottom: 15,
		backgroundColor: 'white',
		fontSize: 14,
		fontFamily: 'open-sans-regular',
		color: colors.NAVY_BLUE,
		paddingLeft: 12,
	},
	passwordContainer: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		backgroundColor: 'white',
	},
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 50,
	},
	hideIcon: {
		fontSize: 26,
		color: colors.NAVY_BLUE,
	},
});
