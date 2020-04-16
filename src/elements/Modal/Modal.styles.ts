import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

// TODO: container shadow does not show iOS with required hidden overflow

// Position of the modal relative to its container.
export const DEFAULT_TOP_OFFSET = 90;

export default StyleSheet.create({
	wrapper: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	underlay: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		backgroundColor: colors.WHITE_TRANSPARENT,
	},
	container: {
		width: 330,
		minHeight: 362,
		position: 'absolute',
		alignItems: 'center',
		overflow: 'hidden',
		borderRadius: 10,
		shadowColor: 'rgba(0, 0, 0, 0.25)',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowRadius: 4,
		shadowOpacity: 1,
	},
	header: {
		width: '100%',
		height: 80,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		width: '95%',
		textAlign: 'center',
		fontFamily: 'open-sans-bold',
		fontSize: 20,
	},
	body: {
		width: '100%',
		flexGrow: 1,
		backgroundColor: colors.WHITE,
	},
	bodyContent: {
		overflow: 'scroll',
		flexGrow: 1,
		width: '100%',
		paddingVertical: 20,
		paddingHorizontal: 18,
		color: colors.NAVY_BLUE,
		textAlign: 'center',
		justifyContent: 'space-around',
	},
});
