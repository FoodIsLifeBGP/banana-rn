import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		height: 45,
		paddingHorizontal: 10,
		paddingVertical: 16,
		minWidth: 'fit-content',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 0,
		borderStyle: 'solid',
	},
	text: {
		fontFamily: 'open-sans-bold',
		fontSize: 16,
		textTransform: 'uppercase',
		textAlign: 'center',
		color: 'inherit',
		whiteSpace: 'nowrap',
	},
	compact: {
		width: 'fit-content',
		borderRadius: 100,
	},
});
