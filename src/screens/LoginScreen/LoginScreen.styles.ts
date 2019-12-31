import { StyleSheet } from 'react-native';
import * as colors from '../../util/colors';

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: colors.BANANA_YELLOW,
		paddingHorizontal: '15%',
	},
	input: {
		height: 50,
		marginBottom: 15,
		backgroundColor: 'white',
		borderRadius: 0,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
	},
});
