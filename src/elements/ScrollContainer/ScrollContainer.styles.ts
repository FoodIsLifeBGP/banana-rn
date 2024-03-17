import { StyleSheet } from 'react-native';
import typography from '@util/typography';
import * as colors from '@util/constants/colors';

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
});
