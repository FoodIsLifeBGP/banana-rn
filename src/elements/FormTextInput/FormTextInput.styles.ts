import { StyleSheet } from 'react-native';
import typography from '@util/typography';
import * as colors from '@util/constants/colors';

const INPUT_PADDING_HORIZONTAL = 10;
const INPUT_HEIGHT = 48;

export default StyleSheet.create({
	input: {
		...typography.body1,
		width: '100%',
		height: INPUT_HEIGHT,
		marginBottom: 5,
		paddingHorizontal: INPUT_PADDING_HORIZONTAL,
		paddingVertical: 13,
		backgroundColor: colors.LIGHT_YELLOW,
		borderWidth: 2,
		borderStyle: 'solid',
		// Transparent border to prevent box-size adjustments when error border is revealed.
		borderColor: 'transparent',
	},
	inputError: {
		borderColor: colors.RED,
	},
	errorMessage: {
		paddingHorizontal: INPUT_PADDING_HORIZONTAL,
	},
	errorMessageText: {
		...typography.body5,
		color: colors.RED,
	},
	disabled: {
		// TODO: apply disabled color palette
		backgroundColor: colors.LIGHT_GRAY_DISABLED,
		color: colors.WHITE,
	},
	passwordVisibilityIcon: {
		position: 'absolute',
		right: 0,
	},
	passwordIconContainer: {
		width: INPUT_HEIGHT, // Ensures clickable area fits accessibility standards
		height: INPUT_HEIGHT,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingRight: 8,
	},
});
