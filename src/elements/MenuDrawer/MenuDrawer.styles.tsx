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
	drawerHeader: {
		backgroundColor: colors.BANANA_YELLOW,
		color: colors.WHITE,
		height: 300,
		justifyContent: 'flex-end',
	},
	drawerHeaderBuffer: {
		backgroundColor: colors.NAVY_BLUE,
		height: 130,
		paddingBottom: 30,
	},
	drawerBottomBuffer: {
		backgroundColor: colors.NAVY_BLUE,
		height: 80,
		paddingBottom: 30,
	},
	menuItem: {
		borderTopColor: 'white',
		borderTopWidth: 1,
		marginLeft: 30,
		marginRight: 30,
		backgroundColor: colors.NAVY_BLUE,
	},
	labelText: {
		color: colors.WHITE,
		textTransform: 'uppercase',
		fontSize: 18,
		textAlign: 'right',
		width: '65%',
		fontWeight: '500',
	},
	username: {
		fontSize: 18,
		color: colors.WHITE,
		textAlign: 'center',
		marginTop: 60,
		fontWeight: '700',
	},
});
