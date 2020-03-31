import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';
import typography from '@util/typography';

const SCREEN_HORIZONTAL_OFFSET = '5%';

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
	},
	banner: {
		flexGrow: 1,
		flexShrink: 2,
		flexBasis: '27%',
		justifyContent: 'center',
		paddingHorizontal: SCREEN_HORIZONTAL_OFFSET,
		backgroundColor: colors.BANANA_YELLOW,
	},
	bodyContainer: {
		flexGrow: 4,
		width: '100%',
		alignItems: 'center',
		paddingTop: '5%',
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
		minHeight: 80,
		maxHeight: 116,
	},
	forgotPassword: {
		alignSelf: 'flex-end',
	},
	forgotPasswordText: {
		...typography.body3,
	},
});
