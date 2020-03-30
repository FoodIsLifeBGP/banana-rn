import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';
import typography from '@util/typography';

const SCREEN_HORIZONTAL_OFFSET = '5%';

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
	},
	inputEmail: {
		marginBottom: 15,
	},
	passwordContainer: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		backgroundColor: 'white',
	},
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 50,
	},
	hideIcon: {
		fontSize: 26,
		color: colors.NAVY_BLUE,
	},
	banner: {
		height: 'fit-content',
		justifyContent: 'center',
		paddingVertical: '12%', // Helps ensure proportions on small screens (e.g. iPhone 4).
		paddingHorizontal: SCREEN_HORIZONTAL_OFFSET,
		backgroundColor: colors.BANANA_YELLOW,
	},
	bodyContainer: {
		width: '100%',
		alignItems: 'center',
		flexGrow: 1,
		// Values (35 & 64) based off of Figma padding-top and screen size of mockup
		paddingTop: 'calc(100vh * (35 / 640))',
		paddingHorizontal: SCREEN_HORIZONTAL_OFFSET,
	},
	form: {
		width: '100%',
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
		width: 'fit-content',
		alignSelf: 'flex-end',
	},
	forgotPasswordText: {
		...typography.body3,
	},
});
