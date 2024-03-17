import { StyleSheet } from 'react-native';
import * as colors from '@util/constants/colors';
import typography from '@util/typography';

const SCREEN_HORIZONTAL_OFFSET = '5%';

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
		flexBasis: '100%',
	},
	header: {
		flexGrow: 1,
		flexShrink: 2,
		flexBasis: '27%',
		maxHeight: 300,
		justifyContent: 'center',
		paddingHorizontal: SCREEN_HORIZONTAL_OFFSET,
		backgroundColor: colors.BANANA_YELLOW,
	},
	bodyContainer: {
		flexGrow: 4,
		width: '100%',
	},
	bodyContentContainer: {
		paddingTop: '5%',
		alignItems: 'center',
		paddingHorizontal: SCREEN_HORIZONTAL_OFFSET,
	},
	form: {
		width: '100%',
	},
	inputEmail: {
		marginBottom: 15,
	},
	buttonContainer: {
		width: '100%',
		flexDirection: 'row',
		paddingHorizontal: '8%',
		justifyContent: 'space-between',
		// Below styling keeps the buttons close to the fields on all screen sizes
		alignItems: 'flex-end',
		flex: 1,
		minHeight: 70,
		maxHeight: 116,
	},
	forgotPassword: {
		alignSelf: 'flex-end',
	},
	forgotPasswordText: {
		...typography.body3,
	},
	linkButtonText: {
		...typography.body3,
		color: colors.NAVY_BLUE,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		...typography.body1,
		textAlign: 'center',
	},
	successText: {
		...typography.body1,
		textAlign: 'center',
		color: 'magenta',
	},
	smallText: {
		...typography.body4,
		textAlign: 'center',
	},
	errors: {
		color: 'red',
		flex: 1,
		flexWrap: 'wrap',
	},
	errorContainer: {
		flexDirection: 'row',
	},
});
