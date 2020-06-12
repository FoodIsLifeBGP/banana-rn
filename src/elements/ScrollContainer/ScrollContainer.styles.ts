import { StyleSheet } from 'react-native';
import typography from '@util/typography';
import * as colors from '@util/colors';

export default StyleSheet.create({
	documentContainer: {
		display: 'flex',
		backgroundColor: 'white',
		borderWidth: 4,
		borderStyle: 'solid',
		borderColor: colors.NAVY_BLUE,
		padding: 15,
	},
	documentText: {
		...typography.body4,
	},
	checkboxContainer: {
		display: 'flex',
		flexDirection: 'row',
		paddingTop: 20,
	},
	checkboxLabel: {
		...typography.body4,
		paddingLeft: 10,
	},
});
