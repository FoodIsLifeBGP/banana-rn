import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

export default StyleSheet.create({
	container: {
		position: 'absolute',
		shadowOpacity: 0.3,
	},
	body: {
		flexGrow: 1,
		alignItems: 'center',
	},
	textContainer: {
		padding: 5,
		flexGrow: 1,
		justifyContent: 'center',
	},
	imageWrapper: {
		alignItems: 'center',
	},
	imageContainer: {
		width: 75,
		height: 75,
		marginBottom: 15,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: colors.NAVY_BLUE,
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