import { StyleSheet } from 'react-native';
import typography from '@util/typography';

export default StyleSheet.create({
	container: {
		marginBottom: 5,
	},
	label: {
		...typography.h3,
	},
});
