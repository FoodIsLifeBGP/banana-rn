import { Dimensions, StyleSheet } from 'react-native';
import platformShadow from '@util/platformShadow';
import * as colors from '@util/colors';

const iconSize = 90;
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const addButtonSize = 110;

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: colors.WHITE,
	},
	contentContainer: {
		flex: 1,
		width: '100%',
		backgroundColor: colors.WHITE,
		justifyContent: 'space-between',
		alignContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
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
	instructionsContainer: {
		width: screenWidth,
		flexDirection: 'column',
		padding: 20,
	},
	timeContainer: {
		width: screenWidth,
		height: screenHeight * 0.2,
		borderTopColor: colors.LIGHT_GRAY_DISABLED,
		borderTopWidth: 1,
		borderBottomColor: colors.LIGHT_GRAY_DISABLED,
		borderBottomWidth: 1,

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
		fontSize: screenWidth * 0.045,
	},

	textBold: {
		fontWeight: 'bold',
	},

	textUnderline: {
		textDecorationLine: 'underline',
	},

	marginSmall: {
		margin: screenWidth * 0.025,
	},

	backgroundColorYellow: {
		backgroundColor: colors.BANANA_YELLOW,
	},

	claimProgressBar: {
		width: '100%',
		padding: 10,
	},

	barContainer: {
		width: '100%',
		flexDirection: 'row',
	},

	pickUpBar: {
		flexBasis: 0,
		height: 12,
		backgroundColor: '#FFE145',
	},
	reserveBar: {
		flexBasis: 0,
		height: 12,
		backgroundColor: '#083A9B',
	},
	leftBar: {
		flexBasis: 0,
		height: 12,
		backgroundColor: '#768FC0',
	},
	textBoxContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		width: '100%',
		padding: 10,
	},
	textBox: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: screenWidth * 0.045,
		color: colors.NAVY_BLUE,
	},


});

