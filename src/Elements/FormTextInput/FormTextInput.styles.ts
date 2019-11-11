import { StyleSheet } from 'react-native';
import * as colors from '../../util/colors';

export default StyleSheet.create({
	container: {
		marginRight: '5%',
	},
	text: {
		fontFamily: 'open-sans-regular',
		fontSize: 14,
		color: colors.NAVY_BLUE,
	},
	input: {
		height: 28,
		marginBottom: 15,
		backgroundColor: 'white',
		paddingLeft: 10,
	},
});
