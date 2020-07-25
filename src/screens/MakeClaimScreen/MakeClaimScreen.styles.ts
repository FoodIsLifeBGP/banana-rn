import { StyleSheet } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/src/styles/colors';
import * as colors from '@util/colors';

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
		justifyContent: 'space-between',
	},
	header: {
		height: 180,
		width: '100%',
		padding: 0,
	},
	section: {
		marginBottom: '3%',
		borderBottomWidth: 1,
		borderBottomColor: 'black',
		paddingBottom: 10,
	},
	mainContent: {
		padding: '3%',
	},
	title: {
		marginBottom: 7,
	},
	smallTitle: {
		marginBottom: 1,
	},
	itemWithIcon: {
		flexDirection: 'row',
		marginBottom: 5,
	},
	item: {
		marginBottom: 5,
	},
	buttonPanel: {
		flexDirection: 'row',
		justifyContent: 'center',
		flex: 1,
		backgroundColor: colors.BANANA_YELLOW,
		alignItems: 'center',
		padding: 10,
	},


});

