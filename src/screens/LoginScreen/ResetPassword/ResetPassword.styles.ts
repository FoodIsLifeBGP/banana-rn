import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';
import typography from '@util/typography';

export default StyleSheet.create({
	text: {
		...typography.body1,
		textAlign: 'center',
	},
	smallText: {
		...typography.body4,
		textAlign: 'center',
	},
	errors: {
		color: 'red',
		flex: 1,
		flexWrap: 'wrap',
	},
	errorContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});
