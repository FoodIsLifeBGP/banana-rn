import { StyleSheet } from 'react-native';
import * as colors from '@util/constants/colors';

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: colors.WHITE,
		paddingHorizontal: '10%',
	},
	titleContainer: {
		height: 180,
		backgroundColor: colors.BANANA_YELLOW,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		width: 320,
		height: 108,
	},
	input: {
		height: 50,
		marginBottom: 15,
	},
	documentContainer: {
		backgroundColor: 'white',
		paddingHorizontal: '5%',
	},
	documentText: {
		fontFamily: 'open-sans-regular',
		color: colors.NAVY_BLUE,
		fontSize: 13,
		textAlign: 'justify',
	},
});
