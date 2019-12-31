import { StyleSheet, Dimensions } from 'react-native';
import * as colors from '../../util/colors';

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
    backgroundColor: colors.BANANA_YELLOW,
		paddingHorizontal: '10%',
		justifyContent: 'space-between',
	},
	input: {
		height: 28,
		marginBottom: 14,
		paddingLeft: 10,
	},
	text: {
		fontFamily: 'open-sans-light',
		fontSize: 14,
		color: colors.NAVY_BLUE,
	},
	checkboxRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkBox: {
		backgroundColor: 'white',
		borderRadius: Dimensions.get('window').width / 2,
	},
});
