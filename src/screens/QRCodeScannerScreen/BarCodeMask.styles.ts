import { StyleSheet, Dimensions } from 'react-native';
import * as colors from '@util/colors';

const { width, height } = Dimensions.get('screen');
const windowSquare = 200;

const widthMinusWindow = (width - windowSquare) / 2;
const heightMinusWindow = (height - windowSquare) / 2;

export default StyleSheet.create({
	top: {
		position: 'absolute',
		backgroundColor: colors.DARK_GRAY_TRANSPARENT,
		top: 0,
		left: 0,
		width,
		height: heightMinusWindow,
	},
	bottom: {
		position: 'absolute',
		backgroundColor: colors.DARK_GRAY_TRANSPARENT,
		bottom: 0,
		left: 0,
		width,
		height: heightMinusWindow,
	},
	left: {
		position: 'absolute',
		backgroundColor: colors.DARK_GRAY_TRANSPARENT,
		top: heightMinusWindow,
		left: 0,
		width: widthMinusWindow,
		height: windowSquare,
	},
	right: {
		position: 'absolute',
		backgroundColor: colors.DARK_GRAY_TRANSPARENT,
		top: heightMinusWindow,
		right: 0,
		width: widthMinusWindow,
		height: windowSquare,
	},
	xContainer: {
		position: 'absolute',
		top: 30,
		left: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	x: {
		textAlign: 'center',
		textAlignVertical: 'center',
		fontSize: 70,
	},
	textContainer: {
		position: 'absolute',
		bottom: 0,
		width,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontFamily: 'open-sans-regular',
		fontSize: 16,
		color: 'white',
		textAlign: 'center',
		lineHeight: 24,
	},
});
