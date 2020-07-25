import { StyleSheet } from 'react-native';
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
	claimedDonation: {
		backgroundColor: colors.NAVY_BLUE,
		padding: 5,
	},
	claimedTag: {
		fontSize: 16,
		fontFamily: 'open-sans-bold',
		textTransform: 'uppercase',
		color: colors.WHITE,
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
	qrContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: colors.BANANA_YELLOW,
		alignItems: 'center',
		padding: 10,
	},
	qrText: {
		color: colors.NAVY_BLUE,
		fontSize: 11,
	},

});

