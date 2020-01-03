import { StyleSheet } from 'react-native';
import * as colors from './src/util/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		backgroundColor: colors.BANANA_YELLOW,
	},
	heading: {
		fontSize: 30,
		color: colors.NAVY_BLUE,
		marginBottom: 12,
		textAlign: 'center',
	},
	text: {
		color: colors.NAVY_BLUE,
		textAlign: 'center',
	},
});
