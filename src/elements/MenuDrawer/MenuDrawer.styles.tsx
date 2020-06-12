import { StyleSheet, Dimensions } from 'react-native';
import * as colors from '@util/colors';

const vh = Dimensions.get('screen').height;

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
<<<<<<< HEAD
<<<<<<< HEAD
		marginTop: -20,
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: vh - (vh / 3),
=======
		alignItems: 'flex-end',
		marginTop: -20,
>>>>>>> 8f54caf... Change height of header, and add negative margin to container (might need to be changed later.)
=======
		marginTop: -20,
		flexDirection: 'column',
		justifyContent: 'space-between',
<<<<<<< HEAD
		height: vh - (vh / 2),
>>>>>>> 8bf47d2... Add TouchableOpacity w MainMenu component to render LogOut button here instead of the doing it from the Route.tsx while still having original functionality. Styles also applied to match styles from other drawer items.
=======
		height: vh - (vh / 3),
>>>>>>> a9ef917... Change height of drawer header, and change the heigh of contianer. Needs more testing.
	},
	drawerHeader: {
		backgroundColor: colors.BANANA_YELLOW,
		color: colors.WHITE,
<<<<<<< HEAD
<<<<<<< HEAD
		height: 120,
		justifyContent: 'center',
=======
		height: 230,
		justifyContent: 'flex-end',
>>>>>>> 8f54caf... Change height of header, and add negative margin to container (might need to be changed later.)
=======
		height: 120,
		justifyContent: 'center',
>>>>>>> a9ef917... Change height of drawer header, and change the heigh of contianer. Needs more testing.
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
		textAlign: 'left',
		marginBottom: 15,
		fontWeight: '700',
		textTransform: 'uppercase',
		marginLeft: '25%',
	},
});
