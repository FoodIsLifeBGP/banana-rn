import { StyleSheet } from 'react-native';
import * as colors from '../../../../util/colors';

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
		marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		height: (iconSize * 0.64),
		width: (iconSize * 0.8),
	},
	infoContainer: {
		flexDirection: 'column',
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
