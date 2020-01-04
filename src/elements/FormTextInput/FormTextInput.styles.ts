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
	text: {
		fontFamily: 'open-sans-regular',
		fontSize: 18,
		color: colors.NAVY_BLUE,
	},
	input: {
		height: 40,
		marginBottom: 14,
		backgroundColor: 'white',
		paddingHorizontal: 8,
		width: '100%',
	},
	disabled: {
		backgroundColor: colors.LIGHT_GRAY_DISABLED,
	},
});
