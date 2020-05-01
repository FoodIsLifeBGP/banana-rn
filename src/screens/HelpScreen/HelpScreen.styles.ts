import { StyleSheet } from 'react-native';
import * as Colors from '@util/colors';
import typography from '@util/typography';

const GRID_MARGIN = 20; // Grid One from Style Guide TODO: make grid constants global

export const HelpListItemStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingHorizontal: GRID_MARGIN,
		paddingVertical: 15,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: Colors.WHITE,
		borderBottomWidth: 1,
		borderBottomColor: Colors.LIGHT_GRAY,
	},
	text: {
		...typography.h3,
	},
	icon: {

	},
});

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
	},
	contentContainer: {
		flex: 1,
		justifyContent: 'space-between',
	},
	helpList: {
		paddingTop: GRID_MARGIN,
	},
});
