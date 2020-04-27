import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		backgroundColor: 'white',
	},
	modal: {
		flex: 1,
	},
	content:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		color: colors.NAVY_BLUE,
	},
	textContainer: {
		marginVertical: 3,
		color: colors.NAVY_BLUE,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textStyle: {
		color: colors.NAVY_BLUE,
	},
	buttonTextStyle: {
		fontSize: 12,
		paddingHorizontal: 15,
	},
	iconStyle: {
		color: 'blue',
		fontSize: 20,
	},
	circle: {
		height: 75,
		width: 75,
		borderWidth: 2,
		borderColor: 'blue',
		borderRadius: 50,
		marginBottom: 10,
	}
});
