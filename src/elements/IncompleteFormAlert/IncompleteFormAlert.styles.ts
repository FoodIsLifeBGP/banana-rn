import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

export default StyleSheet.create({
	container: {
		position: 'absolute',
	},
	body: {
		flexGrow: 1,
		alignItems: 'center',
	},
	textContainer: {
		padding: 15,
		flexGrow: 1,
		justifyContent: 'center',
	},
	buttonWrapper: {
		flexDirection: 'row',
	},
	leftButton: {
		borderWidth: 2,
		borderColor: colors.NAVY_BLUE,
		margin: 10,
	},
	rightButton: {
		borderWidth: 2,
		borderColor: colors.NAVY_BLUE,
		margin: 10,
	},
});
