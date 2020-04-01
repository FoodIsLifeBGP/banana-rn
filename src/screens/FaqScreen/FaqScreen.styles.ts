import { StyleSheet } from 'react-native';
import * as Colors from '@util/colors';
import typography from '@util/typography';

const GRID_MARGIN = 20; // Grid One from Style Guide TODO: make grid constants global
export const ICON_SIZE = 24;

export const QuestionListItem = StyleSheet.create({
	// TODO: Reduce redundancy with Contact Screen
	container: {
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: 'transparent',
		borderTopColor: Colors.LIGHT_GRAY,
	},
	firstContainer: {
		borderTopColor: 'transparent',
	},
	questionContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: GRID_MARGIN,
		paddingVertical: 10,
		backgroundColor: Colors.WHITE,
	},
	questionIcon: {
	},
	questionText: {
		...typography.h4,
		textTransform: 'none',
		paddingLeft: GRID_MARGIN,
	},
	answerTextContainer: {
		paddingHorizontal: GRID_MARGIN,
	},
	answerText: {
		...typography.body1,
		paddingLeft: ICON_SIZE + GRID_MARGIN,
		paddingVertical: 10,
	},
});

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
	},
	bodyContainer: {
		flex: 1,
	},
	questionList: {
		paddingVertical: GRID_MARGIN / 2,
	},
	backButton: {
		padding: 20,
	},
});
