import {
	Dimensions,
	Platform,
	StatusBar,
	StyleSheet,
} from 'react-native';
// import { material } from 'react-native-typography';
import * as colors from '../../util/colors';

export default StyleSheet.create({
	container: {
		width: Dimensions.get('window').width,
	},
	contentContainer: {
		flexDirection: 'row',
		backgroundColor: colors.BANANA_YELLOW,
		marginTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 0,
		height: 50 + (Platform.OS === 'ios' ? StatusBar.currentHeight || 0 : 0),
		alignItems: 'center',
	},
	titleTextContainer: {
		flex: 0.5,
	},
	backButtonContainer: {
		flex: 0.25,
	},
	backButtonInnerContainer: {
		flexDirection: 'row',
	},
	backButtonIcon: {
		color: colors.WHITE,
		fontSize: 18,
		marginLeft: 10,
		marginRight: 8,
		alignSelf: 'center',
	},
	backButtonLabel: {
		fontWeight: '300',
		fontSize: 17,
		alignSelf: 'center',
	},
});
