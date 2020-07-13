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
		backgroundColor: colors.BANANA_YELLOW,
		marginHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'blue',
		borderWidth: 1,
	},
	icon: {
		height: (iconSize * 0.50),
		width: (iconSize * 0.7),
	},
	infoContainer: {
		height: 125,
		//justifyContent: 'center',
		backgroundColor: colors.LIGHT_GRAY,
		borderRadius: 15,
	},
	infoText: {
		fontFamily: 'open-sans-regular',
		color: colors.NAVY_BLUE,
	},
	infoTextBold: {
		fontFamily: 'open-sans-bold',
		color: colors.NAVY_BLUE,
	},
	infoTitle: {
		width: iconSize,
		textAlign: 'center',
		fontFamily: 'open-sans-bold',
		color: colors.NAVY_BLUE,
		marginHorizontal: 10,
		marginTop: 10,
	}
});
