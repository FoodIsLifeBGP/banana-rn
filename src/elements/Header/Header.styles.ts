import {
	Dimensions,
	Platform,
	StatusBar,
	StyleSheet,
} from 'react-native';
// import { material } from 'react-native-typography';
import * as colors from '../../util/colors';

export default StyleSheet.create({
	contentContainer: {
		marginTop: Platform.OS === 'ios' ? 40 : 10,
		marginHorizontal: '-5%',
		backgroundColor: colors.BANANA_YELLOW,
		height: 60,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	backContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		left: -15,
	},
	menuContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		right: -5,
	},
	menu: {
		fontSize: 55,
		color: 'white',
	},
	backButtonLabel: {
		fontFamily: 'open-sans-light',
		fontWeight: '300',
		fontSize: 17,
		color: colors.NAVY_BLUE,
	},
});
