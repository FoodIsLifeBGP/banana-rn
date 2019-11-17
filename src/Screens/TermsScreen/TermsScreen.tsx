import React from 'react';
import { TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Title, LinkButton, SpacerInline, Header } from '../../elements';
import Terms from '../../../assets/documents/SampleToS'
import styles from './TermsScreen.styles';

export default () => {
	return (
		<View style={styles.outerContainer}>
			<Header showMenu={false} />
			<Title text="Terms and conditions" />
			<SpacerInline height={20} />
			<ScrollView contentContainerStyle={{ justifyContent: 'space-between' }}>
				<View style={styles.documentContainer}>
					<TextInput
						style={styles.documentText}
						multiline={true}
						editable={false}
						scrollEnabled={true}
					>
						{Terms}
					</TextInput>
				</View>
			</ScrollView>
			<SpacerInline height={20} />
			<LinkButton text="Accept" destination="PendingScreen" />
			<SpacerInline height={40} />
		</View>
	);
};

