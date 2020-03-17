import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

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
		width: 'calc(100% - 15px)',
		height: 'fit-content',
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
		color: 'inherit',
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		whiteSpace: 'normal',
	},
	body: {
		width: '100%',
		height: 'fit-content',
		alignItems: 'center',
		backgroundColor: colors.WHITE,
		maxHeight: '56.25vh',
	},
	bodyContent: {
		overflow: 'scroll',
		height: '100%',
		width: '100%',
		paddingVertical: 20,
		paddingHorizontal: 18,
	},
});
