import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

export default StyleSheet.create({
	container: {
		height: 45,
		paddingHorizontal: 10,
		paddingVertical: 16,
		minWidth: 'fit-content',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontFamily: 'open-sans-bold',
		fontSize: 16,
		textTransform: 'uppercase',
		textAlign: 'center',
		color: 'inherit',
		whiteSpace: 'nowrap',
	},
	compact: {
		width: 'fit-content',
		borderRadius: 100,
	},
	default: {
		backgroundColor: colors.GRAY,
		color: colors.NAVY_BLUE,
	},
	primary: {
		backgroundColor: colors.NAVY_BLUE,
		color: colors.WHITE,
	},
	accent: {
		backgroundColor: colors.RED,
		color: colors.WHITE,
	},
	disabled: {
		backgroundColor: colors.LIGHT_GRAY_DISABLED,
	},
	active: {
		backgroundColor: colors.BANANA_YELLOW,
		color: colors.NAVY_BLUE,
	},
});
