import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Header, SpacerInline, Title } from '@elements';
import styles from './FaqScreen.styles';

export default () => (
	<View style={styles.outerContainer}>
		<View style={styles.headerContainer}>
			<Header showMenu={true} />
		</View>
		<Title text="Learn More" />
		<SpacerInline height={20} />
		<View style={styles.contentContainer}>
			<Text style={styles.headingText}>
				FAQs
			</Text>
			<SpacerInline height={20} />
			<FaqLineItem question="this is a question" answer="this is an answer" />
		</View>
	</View>
);

interface FAQItemProps {
	question: string;
	answer: string;
}

const FaqLineItem = (props: FAQItemProps) => {
	const answerVisible = true;
	const toggleAnswerVisibility = () => {
		// TODO: Show/hide answer based on previous visibility state
	};

	const answerText = answerVisible ? <Text style={styles.answerText}>{props.answer}</Text> : null;

	return (
		<View style={styles.contentContainer}>
			<TouchableOpacity onPress={toggleAnswerVisibility}>
				<Text style={styles.questionText}>{props.question}</Text>
			</TouchableOpacity>
			{answerText}
		</View>
	);
};

