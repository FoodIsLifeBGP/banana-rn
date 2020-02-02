import { StyleSheet } from 'react-native';
import platformShadow from '@util/platformShadow';
import * as colors from '@util/colors';

const iconSize = 90;
const addButtonSize = 110;

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: colors.WHITE,
	},
	contentContainer: {
		flex: 1,
		flexGrow: 0.7,
		width: '100%',
		backgroundColor: colors.WHITE,
		justifyContent: 'space-between',
		alignContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		padding: 10,
	},
	blockCenterContainer: {
		width: '100%',
		justifyContent: 'space-between',
		alignContent: 'center',
		alignItems: 'center',
	},
	iconContainer: {
		height: iconSize,
		width: iconSize,
		borderRadius: iconSize / 2,
		borderColor: colors.NAVY_BLUE,
		backgroundColor: colors.DARK_GRAY,
		borderWidth: 3,
		marginHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		height: (iconSize * 0.64),
		width: (iconSize * 0.8),
	},

	title: {
		fontSize: 25,
		fontWeight: 'bold',
		color: colors.NAVY_BLUE,
		lineHeight: 35,
	},
	timeBoard: {
		fontSize: 25,
		fontWeight: 'bold',
		color: colors.NAVY_BLUE,
		lineHeight: 35,
	},


	QRCodeContainer: {
		flex: 1,
		flexGrow: 0.3,
		width: '100%',
		justifyContent: 'space-between',
		alignContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: colors.BANANA_YELLOW,
		flexWrap: 'wrap',
		padding: 20,
		minHeight: 200,
	},

	text: {
		color: colors.NAVY_BLUE,
		fontSize: 11,
	},

	textBold: {
		fontWeight: 'bold',
	},

	textUnderline: {
		textDecorationLine: 'underline',
	},

	backgroundColorYellow: {
		backgroundColor: colors.BANANA_YELLOW,
	},


});

