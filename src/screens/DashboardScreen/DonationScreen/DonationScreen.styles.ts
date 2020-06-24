import { StyleSheet } from 'react-native';

const iconSize = 90;

export default StyleSheet.create({
	keyboardAvoidContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	scrollContainer: {
		paddingHorizontal: '5%',
		paddingTop: '10%',
		flex: 1,
	},
	input: {
		marginBottom: 14,
	},
	row: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
