import { StyleSheet } from 'react-native';
import * as colors from '../../../util/colors';

export default StyleSheet.create({
	modalBackground: {
		position: 'absolute',
		flex: 1,
		backgroundColor: colors.DARK_GRAY_TRANSPARENT,
		justifyContent: 'center',
		alignItems: 'center',
	},
	messageContainer: {
		width: '90%',
		maxWidth: 300,
		backgroundColor: 'white',
		borderRadius: 3,
		alignItems: 'center',
		padding: 15,
		textAlign: 'center',
	},
});
