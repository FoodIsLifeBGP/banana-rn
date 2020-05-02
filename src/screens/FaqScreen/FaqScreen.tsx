import React, { useState } from 'react';
import {
	Text,
	TouchableHighlight,
	View,
	ScrollView,
} from 'react-native';
import {
	ContentHeader,
	NavBar,
	LinkButton,
	SpacerInline,
	Icon,
} from '@elements';
import { useNavigation } from 'react-navigation-hooks';
import styles, {
	QuestionListItem,
	ICON_SIZE,
} from './FaqScreen.styles';

export default () => {
	const { goBack } = useNavigation();

	return (
		<View style={styles.outerContainer}>
			<View style={{ width: '50%' }}>
				<NavBar />
			</View>

			<ScrollView>
				<ContentHeader title="FAQs" textStyle={{ textTransform: 'none' }} />

				<View style={styles.bodyContainer}>
					<View style={styles.questionList}>
						{
							questions.map((
								{
									question,
									answer,
								},
								i,
							) => (
								<FaqListItem
									key={question}
									question={question}
									answer={answer}
									listIndex={i}
								/>
							))
						}
					</View>

					<View style={styles.backButton}>
						<LinkButton text="Back" onPress={() => goBack()} />
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

interface FAQItemProps {
	question: string;
	answer: string;
	listIndex: number;
}

const FaqListItem = ({
	question,
	answer,
	listIndex,
}: FAQItemProps) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const handlePress = () => {
		setIsOpen(!isOpen);
	};

	return (
		<View style={[
			QuestionListItem.container,
			listIndex === 0 && QuestionListItem.firstContainer,
		]}
		>
			<TouchableHighlight onPress={handlePress}>
				<View style={QuestionListItem.questionContainer}>
					<View style={QuestionListItem.questionIcon}>
						<Icon
							name={isOpen
								? 'condense'
								: 'expand'}
							size={ICON_SIZE}
						/>

						{/* TODO: <Icon name="singleBanana" size={ICON_SIZE} /> */}
					</View>
					<Text style={QuestionListItem.questionText}>{question}</Text>
				</View>
			</TouchableHighlight>

			<View style={
				[
					QuestionListItem.answerTextContainer,
					{
						display: isOpen
							? 'flex'
							: 'none',
					},
				]
			}
			>
				<Text style={QuestionListItem.answerText}>
					{answer}
				</Text>
			</View>
		</View>
	);
};

// Temporary structure, will be replaced by API call?
const questions: Array<{ question: string; answer: string }> = [
	{
		question: 'What are the guidelines for donation items?',
		// TODO: find data structure that enables rich text parsing, so we can dynamically add bold, italics, etc
		answer: `
We are big on trust & safety. Please follow below.
Items you can donate: considered not aesthetically-pleasing for market display or sale but still \
edible and in good condition. Items you cannot donate: that you would not be willing to eat yourself.
		`,
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
