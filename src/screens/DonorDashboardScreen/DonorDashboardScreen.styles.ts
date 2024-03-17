import { StyleSheet } from 'react-native';
import platformShadow from '@util/platformShadow';
import * as colors from '@util/constants/colors';

const addButtonSize = 110;

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: colors.WHITE,
	},
	contentContainer: {
		flex: 1,
		padding: 20,
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
		fontFamily: 'open-sans-bold',
		fontSize: 40,
		color: colors.NAVY_BLUE,
	},
	activeHeader: {
		fontFamily: 'open-sans-regular',
		fontSize: 20,
		color: colors.NAVY_BLUE,
	},
});
