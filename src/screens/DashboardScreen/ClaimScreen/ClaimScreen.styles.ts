import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';
import platformShadow from '@util/platformShadow';

const addButtonSize = 110;
const iconSize = 90;

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: '#ffffff',
		paddingHorizontal: '11%',
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
	addButton: {
		position: 'absolute',
		bottom: 60,
		right: 25,
		height: addButtonSize,
		width: addButtonSize,
		borderColor: 'white',
		borderRadius: addButtonSize / 2,
		borderWidth: 2,
		backgroundColor: colors.NAVY_BLUE,
		justifyContent: 'center',
		alignItems: 'center',
		...platformShadow(5),
	},
	plus: {
		fontFamily: 'open-sans-light',
		fontSize: 110,
		color: colors.BANANA_YELLOW,
		bottom: 24,
	},
	detailTop: {
		flex: 1,
		backgroundColor: colors.BANANA_YELLOW,
	},
	detailBot: {
		flex: 1,
		backgroundColor: '#ffffff',
		flexDirection:'column'
	},
	heading: {
		fontSize: 30,
		color: colors.NAVY_BLUE,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	H3:{
		fontSize: 20,
		color: colors.NAVY_BLUE,
		textAlign: 'center',
		fontWeight: 'bold',
		padding:5
	},
	text:{
		fontSize: 15,
		color: colors.NAVY_BLUE,
		textAlign: 'center',
		padding:8
	},
	icon: {
		height: (iconSize * 0.64),
		width: (iconSize * 0.8),
	},
	iconMask: {
		height: iconSize,
		width: iconSize,
		borderRadius: iconSize / 2,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'white',
		borderWidth: 1,
	},
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	button:{
		padding:10
	}
});
