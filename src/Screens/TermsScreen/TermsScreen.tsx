import React from 'react';
import { Text, View } from 'react-native';
import { Title, LinkButton } from '../../Elements';
import styles from './TermsScreen.styles';
import { ScrollView } from 'react-native-gesture-handler';

export default () => {
	// TODO: get document
	const document = null; // axios.get()
	return (
		<View style={styles.outerContainer}>
			<View style={{ height: 140 }} />
			<Title text="Terms and conditions" />
			<View style={{ height: 40 }} />
			<ScrollView style={styles.documentContainer}>
				<Text style={styles.document}>
					{document}
				</Text>
			</ScrollView>
			<LinkButton text="Accept" destination="PendingScreen" />
		</View>
	);
};

