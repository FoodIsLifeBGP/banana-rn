import { StyleSheet } from 'react-native';
import * as colors from '../../../src/util/colors';

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
    backgroundColor: colors.BANANA_YELLOW,
		paddingHorizontal: '15%',
		paddingTop: 140,
	},
	input: {
		height: 50,
		marginBottom: 15,
		backgroundColor: 'white',
		borderRadius: 0,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
	}
});
