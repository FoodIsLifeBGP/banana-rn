import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';
import platformShadow from '@util/platformShadow';

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: colors.WHITE,
		// paddingHorizontal: '11%',
	},
	imageContainer: {
		height: 250,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: '6%',
	},
	image: {
		height: 160,
		width: 200,
		
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
	timeRemainingContainer: {
		flexDirection: 'row',
		fontFamily: 'open-sans-bold',
		color: colors.NAVY_BLUE,
		fontSize: 24,
		backgroundColor: colors.LIGHT_GRAY,
		width: '50%',
		height: 'auto',
		alignSelf: 'center',
		marginVertical: 30,
		paddingVertical: 10,
		paddingHorizontal: 30,
	},
	addressText: {
		fontFamily: 'open-sans-regular',
		color: colors.NAVY_BLUE,
		fontSize: 16
	},
	descriptionText: {
		fontFamily: 'open-sans-regular',
		color: colors.DARK_GRAY_TRANSPARENT,
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
	},
	icon: {
		height: 6,
		width: 8,
	}
});
