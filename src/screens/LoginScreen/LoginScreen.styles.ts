import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';
import typography from '@util/typography';

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
		paddingVertical: 55,
		paddingHorizontal: '5%',
		backgroundColor: colors.BANANA_YELLOW,
	},
	innerContainer: {
		flexGrow: 1,
		paddingTop: 'calc(100vh * (35 / 640))',
		paddingHorizontal: '15%',
		justifyContent: 'space-between',
	},
	form: {
	},
	buttonContainer: {
		flexDirection: 'row',
		paddingHorizontal: '8%',
		justifyContent: 'space-between',
		alignItems: 'center',
		bottom: 50,
	},
	forgotPassword: {
		width: 'fit-content',
		alignSelf: 'flex-end',
	},
	forgotPasswordText: {
		...typography.body3,
	},
});
