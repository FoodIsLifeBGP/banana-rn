import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

const iconSize = 90;

export default StyleSheet.create({
	card: {
		height: 120,
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconContainer: {
		height: iconSize,
		width: iconSize,
		borderRadius: iconSize / 2,
		backgroundColor: 'blue',
		marginHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'white',
		borderWidth: 1,
	},
	icon: {
		height: (iconSize * 0.64),
		width: (iconSize * 0.8),
	},
	infoContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	infoText: {
		fontFamily: 'open-sans-regular',
		color: colors.NAVY_BLUE,
	},
	infoTextBold: {
		fontFamily: 'open-sans-bold',
		color: colors.NAVY_BLUE,
	},
});
