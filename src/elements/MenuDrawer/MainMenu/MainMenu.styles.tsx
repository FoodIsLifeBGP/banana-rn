import { StyleSheet, Dimensions } from 'react-native';
import * as colors from '@util/colors';

// Get Window Height;
// Used for placement of LogOut button.
const wh = Dimensions.get('window').height;

console.log(wh);

export default StyleSheet.create({
	mainMenu: {
<<<<<<< HEAD
<<<<<<< HEAD
		flex: 1,
=======
		display: 'flex',
>>>>>>> 4b6e506... Create React component that render MainMenu elements (Scan QR Code text and its icon, etc.)
=======
		flex: 1,
>>>>>>> 6f11d20... Remove unnecessary styles.
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
<<<<<<< HEAD
<<<<<<< HEAD
	},
<<<<<<< HEAD
	logOut: {
		borderTopWidth: 0,
	},
});
=======
	}
});
>>>>>>> 4b6e506... Create React component that render MainMenu elements (Scan QR Code text and its icon, etc.)
=======
	},
});
>>>>>>> 154e7eb... Fix linter issues.
=======
	contactUs: {
		borderBottomWidth: 1,
		borderBottomColor: colors.WHITE,
		paddingBottom: 20,
	},
	logOut: {
		borderTopWidth: 1,
	},
});
>>>>>>> b81bef6... Clean up code.
