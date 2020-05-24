import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

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
	drawerHeader: {
		backgroundColor: colors.BANANA_YELLOW,
		color: colors.WHITE,
		height: 250,
		justifyContent: 'flex-end',
	},
	drawerHeaderBuffer: {
		backgroundColor: colors.NAVY_BLUE,
		height: 90,
		paddingBottom: 30,
	},
	drawerBottomBuffer: {
		backgroundColor: colors.NAVY_BLUE,
		height: 80,
		paddingBottom: 30,
	},
	menuItem: {
		marginLeft: 30,
		marginRight: 30,
		backgroundColor: colors.NAVY_BLUE,
	},
	labelText: {
		color: colors.WHITE,
		textTransform: 'uppercase',
		fontSize: 20,
		textAlign: 'right',
		width: '65%',
		fontWeight: 'bold',
	},
	username: {
		fontSize: 24,
		color: colors.NAVY_BLUE,
		textAlign: 'center',
		marginBottom: 15,
		fontWeight: '700',
		textTransform: 'uppercase',
	},
});
