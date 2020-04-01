import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

export default StyleSheet.create({
	questionText: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		color: colors.NAVY_BLUE,
		textDecorationLine: 'underline',
	},
	answerText: {
		fontFamily: 'open-sans-regular',
		fontSize: 18,
		color: colors.NAVY_BLUE,
	},
	headerContainer: {
		paddingHorizontal: '10%',
	},
	headingText: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		color: colors.NAVY_BLUE,
		alignSelf: 'center',
	},
	outerContainer: {
		flex: 1,
		backgroundColor: colors.BANANA_YELLOW,
	},
	contentContainer: {
		flex: 1,
		backgroundColor: 'white',
		padding: 25,
	},
});
