import { StyleSheet } from 'react-native';
import * as colors from '@util/constants/colors';

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: colors.BANANA_YELLOW,
		padding: '20%',
	},
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		height: 40,
		width: '80%',
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		padding: 5,
		margin: 10,
		textAlign: 'center',
	},
});
