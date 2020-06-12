import { StyleSheet, Dimensions } from 'react-native';
import * as colors from '@util/colors';

// Get Window Height;
// Used for placement of LogOut button.
const wh = Dimensions.get('window').height;

console.log(wh);

export default StyleSheet.create({
	mainMenu: {
		flex: 1,
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
		borderBottomWidth: 1,
		borderBottomColor: colors.WHITE,
		paddingBottom: 20,
	},
	logOut: {
		borderTopWidth: 1,
	},
});