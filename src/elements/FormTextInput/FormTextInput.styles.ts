import { StyleSheet } from 'react-native';
import typography from '@util/typography';
import * as colors from '@util/colors';

const INPUT_PADDING_HORIZONTAL = 10;

export default StyleSheet.create({
	input: {
		...typography.body1,
		width: '100%',
		height: 48,
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
});
