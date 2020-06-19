import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

export default StyleSheet.create({
	floatingContainer:{
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		height: 65,
		width: 65,
		left: 273,
		top: 525,
	},
	ellipseContainer: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		height: 65,
		width: 65,
		borderRadius: 65 / 2,
		backgroundColor: colors.WHITE,
	},
	iconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 63.5,
		width: 63.5,
		borderRadius: 63.5 / 2,
		borderColor: colors.BANANA_YELLOW,
		margin: 3,
	}
});