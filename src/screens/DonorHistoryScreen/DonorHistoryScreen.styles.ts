import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: colors.WHITE,
	},
	contentContainer: {
		flex: 1,
		padding: 20,
	},
	input: {
		height: 50,
		marginBottom: 15,
	},
	activeHeader: {
		fontFamily: 'open-sans-regular',
		fontSize: 20,
		color: colors.NAVY_BLUE,
	},
});
