import { StyleSheet } from 'react-native';
import * as colors from '../../util/colors';

export default StyleSheet.create({
	avatar: {
		alignSelf: 'center',
		marginBottom: -50,
		zIndex: 1,
		borderColor: colors.WHITE,
		borderWidth: 4,
		borderRadius: 55,
	},
	container: {
		flex: 1,
		backgroundColor: colors.NAVY_BLUE,
		alignItems: 'flex-end',
	},
	drawer: {
		backgroundColor: colors.NAVY_BLUE,
	},
	drawerHeader: {
		backgroundColor: colors.BANANA_YELLOW,
		color: colors.WHITE,
		height: 300,
		justifyContent: 'flex-end'
	},
	drawerHeaderBuffer: {
		backgroundColor: colors.NAVY_BLUE,
		height: 100,
	},
	labelText: {
		color: colors.WHITE,
		textTransform: 'uppercase',
		fontSize: 18,
		textAlign: 'right',
		width: '80%',
		fontWeight: '400',
	},
	username: {
		fontSize: 18,
		color: colors.WHITE,
		textAlign: 'center',
		marginTop: 60,
		fontWeight: 'bold',
	}
});