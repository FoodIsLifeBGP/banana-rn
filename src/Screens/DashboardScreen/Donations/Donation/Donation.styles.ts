import { StyleSheet } from 'react-native';
import * as colors from '../../../../util/colors';

const iconSize = 90;

export default StyleSheet.create({
	card: {
		height: 120,
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		height: iconSize,
		width: iconSize,
		borderRadius: iconSize / 2,
		backgroundColor: 'blue',
		marginRight: 10,
	},
	infoContainer: {
		flexDirection: 'column',
	},
	infoText: {
		fontFamily: 'open-sans-regular',
		color: colors.NAVY_BLUE,
	},
});
