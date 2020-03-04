import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';
import platformShadow from '@util/platformShadow';

const iconSize = 90;

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: colors.WHITE,
		// paddingHorizontal: '11%',
	},
	imageContainer: {
		height: 120,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: '6%',
	},
	card: {
		height: 120,
		flexDirection: 'column',
		alignItems: 'flex-start',
		paddingHorizontal: '6%',
	},
	foodTitle: {
		fontFamily: 'open-sans-bold',
		color: colors.NAVY_BLUE,
		fontSize: 32
	},
	donorSubtitle: {
		fontFamily: 'open-sans-bold',
		color: colors.NAVY_BLUE,
		fontSize: 13
	},
	subtitle: {
		fontFamily: 'open-sans-regular',
		color: colors.NAVY_BLUE,
		fontSize: 13
	},
	sectionTitle: {
		fontFamily: 'open-sans-bold',
		color: colors.NAVY_BLUE,
		fontSize: 24
	},
	addressText: {
		fontFamily: 'open-sans-regular',
		color: colors.NAVY_BLUE,
		fontSize: 16
	},
	descriptionText: {
		fontFamily: 'open-sans-regular',
		color: colors.DARK_GRAY,
		fontSize: 13,
		textAlign: 'justify',
	},
	infoContainer: {
		flexDirection: 'column',
	},
	buttonContainer: {
		backgroundColor: colors.BANANA_YELLOW,
		paddingHorizontal: '11%',
		height: 64,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	cancelButton: {
		backgroundColor: colors.BANANA_YELLOW,
		borderColor: colors.NAVY_BLUE,
		borderWidth: 1,
		height: 30,
		justifyContent: 'center',
		paddingHorizontal: 40,
		...platformShadow(5),
	},
	claimButton: {
		backgroundColor: colors.NAVY_BLUE,
		borderColor: colors.NAVY_BLUE,
		borderWidth: 1,
		height: 30,
		justifyContent: 'center',
		paddingHorizontal: 40,
		...platformShadow(5),
	},
	cancelButtonText: {
		fontFamily: 'open-sans-regular',
		fontSize: 13,
		color: colors.NAVY_BLUE,
	},
	claimButtonText: {
		fontFamily: 'open-sans-regular',
		fontSize: 13,
		color: colors.WHITE,
	}
});
