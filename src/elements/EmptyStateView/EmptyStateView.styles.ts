import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		backgroundColor: colors.LIGHT_YELLOW,
		padding: 40,
	},
	browser: {
		height: 200,
		width: 200,
		resizeMode: 'contain',
	},
});
