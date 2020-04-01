import React, { useState } from 'react';
import {
	Text,
	TouchableHighlight,
	TouchableHighlightProps,
	View,
} from 'react-native';
import {
	ContentHeader,
	Header,
	LinkButton,
	SpacerInline,
} from '@elements';
import { ScrollView } from 'react-native-gesture-handler';
import styles, { QuestionListItem, ICON_SIZE } from './FaqScreen.styles';

export default () => {
	// Array of the 'open' state mapped to the FAQ questions.
	const [ questionOpenStates, setQuestionOpenStates ] = useState(new Array(questions.length).fill(false));

	return (
		<View style={styles.outerContainer}>
			<View style={{ width: '50%' }}>
				<Header showMenu={true} />
			</View>
			{/* Delete spacer after TopBar/NavBar is fixed/ added */}
			<SpacerInline height={1} />

			<ScrollView>
				<ContentHeader title="FAQs" textStyle={{ textTransform: 'none' }} />

				<View style={styles.bodyContainer}>
					<View style={styles.questionList}>
						{
							questions.map(({ question, answer }, i) => (
								<FaqLineItem
									// eslint-disable-next-line react/no-array-index-key
									key={i}
									question={question}
									answer={answer}
									open={questionOpenStates[i]}
									listIndex={i}
									onPress={() => {
										// Toggle open status of question
										const arr = [ ...questionOpenStates ];
										arr[i] = !arr[i];
										setQuestionOpenStates(arr);
									}}
								/>
							))
						}
					</View>

					{/* https://reactnavigation.org/docs/navigating/#going-back */}
					{/* TODO: add style prop to LinkButton */}
					<View style={styles.backButton}>
						<LinkButton text="Back" onPress={() => console.log('programmatically go back')} />
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

interface FAQItemProps {
	question: string;
	answer: string;
	open: boolean;
	listIndex: number;
	onPress: TouchableHighlightProps['onPress'];
}

// TODO: Rename FaqListItem
const FaqLineItem = ({
	question,
	answer,
	open,
	listIndex,
	onPress,
}: FAQItemProps) => (
	<View style={[
		QuestionListItem.container,
		listIndex === 0 && QuestionListItem.firstContainer,
	]}
	>
		<TouchableHighlight onPress={onPress}>
			<View style={QuestionListItem.questionContainer}>
				{/* <Icon style={QuestionListItem.questionIcon} name="singleBanana" size={ICON_SIZE} /> */}
				{/* Replace View el (below) with Icon el (above) when Icon component using SVG is available */}
				<View style={[ QuestionListItem.questionIcon, { backgroundColor: 'pink', width: ICON_SIZE, height: ICON_SIZE } ]} />
				<Text style={QuestionListItem.questionText}>{question}</Text>
			</View>
		</TouchableHighlight>

		<View style={[ QuestionListItem.answerTextContainer, { display: open ? 'flex' : 'none' } ]}>
			<Text style={QuestionListItem.answerText}>
				{answer}
			</Text>
		</View>
	</View>
);

// Temporary structure, will be replaced by API call?
const questions: Array<{ question: string; answer: string }> = [
	{
		question: 'What are the guidelines for donation items?',
		// TODO: find data structure that enables rich text parsing, so we can dynamically add bold, italics, etc
		answer: 'We are big on trust & safety. Please follow below. '
			+ 'Items you can donate: considered not aesthetically-pleasing for market display or sale but still '
			+ 'edible and in good condition. Items you cannot donate: that you would not be willing to eat yourself.',
	},
	{
		question: 'Can I cancel or edit the published donations?',
		answer: 'Answer',
	},
	{
		question: 'How do I know if someone is coming to claim the food?',
		answer: 'Answer',
	},
	{
		question: 'The claim donation didn\'t get picked up',
		answer: 'Answer',
	},
	{
		question: 'I forgot to scan the QR code? What do I do?',
		answer: 'Answer',
	},
];
