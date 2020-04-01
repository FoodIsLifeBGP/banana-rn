import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Linking } from 'expo';
import {
	Title,
	SpacerInline,
	Header,
	LinkButton,
} from '@elements';
import styles from './HelpScreen.styles';

export default () => (
	<View style={styles.outerContainer}>
		<View style={styles.headerContainer}>
			<Header showMenu={true} />
		</View>
		<Title text="Learn More" />
		<SpacerInline height={20} />
		<ScrollView contentContainerStyle={styles.contentContainer}>
			<View>
				<HelpLineItem text="FAQs" destination="FaqScreen" />
				<HelpLineItem text="Tutorial" link="https://www.youtube.com/watch?v=Psax2CCcJEI" />
				<HelpLineItem text="Contact Us" destination="ContactScreen" />
			</View>
		</ScrollView>
	</View>
);


interface HelpItemProps {
	text: string;
	destination?: string;
	link?: string;
}

const HelpLineItem = (props: HelpItemProps) => {
	const handlePress = () => {
		// TODO: Update this to navigate directly to YouTube
		props.link && Linking.openURL(props.link);
	};
	return (
		<View style={styles.lineItem}>
			<SpacerInline height={20} />
			<LinkButton
				text={props.text}
				destination={props.destination}
				onPress={handlePress}
			/>
		</View>
	);
};
