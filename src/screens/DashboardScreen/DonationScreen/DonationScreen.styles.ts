import { StyleSheet } from 'react-native';
import typography from '@util/typography';
import * as colors from '@util/colors';

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
	imageInputContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		height: 60,
		width: 60,
		borderRadius: 30,
		borderColor: colors.NAVY_BLUE,
		borderWidth: 2,
	},
	input: {
		marginBottom: 14,
	},
	row: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		marginBottom: 30,
	},
	pickupAddressLabel: {
		...typography.h3,
		marginBottom: 14,
	},
	pickupAddressStyle: {
		...typography.body1,
		marginBottom: 14,
		paddingHorizontal: 10,
		paddingVertical: 13,
		left: 10,
	},
});
