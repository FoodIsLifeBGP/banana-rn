import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

export default StyleSheet.create({
	container: {
	},
	inlineContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	input: {
		height: 40,
		marginBottom: 10,
		backgroundColor: colors.LIGHT_YELLOW,
		paddingHorizontal: 8,
		paddingVertical: 10,
		color: colors.NAVY_BLUE,
		width: '100%',
	},
	disabled: {
		backgroundColor: colors.LIGHT_GRAY_DISABLED,
	},
});
