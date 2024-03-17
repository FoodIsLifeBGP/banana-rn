import { StyleSheet } from 'react-native';
import * as colors from '@util/constants/colors';
import typography from '@util/typography';

export default StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		...typography.body1,
		textAlign: 'center',
	},
	successText: {
		...typography.body1,
		textAlign: 'center',
		color: 'magenta',
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
