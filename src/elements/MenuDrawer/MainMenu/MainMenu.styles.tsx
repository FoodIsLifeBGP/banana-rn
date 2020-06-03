import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';
import MainMenu from './MainMenu';

export default StyleSheet.create({
	mainMenu: {
		display: 'flex',
		width: '100%',
		paddingLeft: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderTopWidth: 1,
		borderTopColor: colors.WHITE,
		paddingTop: 20,
		marginBottom: 15,
		marginTop: 5,
		letterSpacing: 0.5,
	},
	menuText: {
		color: colors.WHITE,
		textTransform: 'uppercase',
		marginLeft: 'auto',
		marginRight: 5,
		fontWeight: 'bold',
		fontSize: 20,
	},
	contactUs: {
		marginBottom: 50,
		borderBottomWidth: 1,
		borderBottomColor: colors.WHITE,
		paddingBottom: 20,
	},
	logOut: {
		borderTopWidth: 0,
		marginTop: 30,
	},
});