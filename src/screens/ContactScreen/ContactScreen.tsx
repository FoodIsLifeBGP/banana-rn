import React from 'react';
import { Text, View } from 'react-native';
import { Header, SpacerInline, Title } from '@elements';
import { Linking } from 'expo';
import styles from './ContactScreen.styles';

export default () => (
	<View style={styles.outerContainer}>
		<View style={styles.headerContainer}>
			<Header showMenu={true} />
		</View>
		<Title text="Learn More" />
		<SpacerInline height={20} />
		<View style={styles.contentContainer}>
			<SpacerInline height={20} />
			<Text style={styles.headingText}>
				CONTACT US
			</Text>
			<SpacerInline height={20} />
			<Text style={styles.documentText}>
				Feel free to reach out to us with any questions or inquiries! We will get back to you in 1-2 business days.
			</Text>
			<SpacerInline height={40} />
			<Text style={styles.contactMethodHeader}>
				WEBSITE
			</Text>
			<Text style={styles.contactMethodText} onPress={openBrowser}>
				www.bananaapp.org
			</Text>
			<SpacerInline height={40} />
			<Text style={styles.contactMethodHeader}>
				EMAIL
			</Text>
			<Text style={styles.contactMethodText} onPress={openMail}>
				thebananaapp@banana.org
			</Text>
			<SpacerInline height={40} />
			<Text style={styles.contactMethodHeader}>
				FACEBOOK
			</Text>
			<Text style={styles.contactMethodText} onPress={openFacebook}>
				Connect with us on Facebook!
			</Text>
		</View>
	</View>
);

const openBrowser = () => {
	Linking.openURL('https://www.google.com/search?q=banana');
};

const openMail = () => {
	// TODO: Supposedly this works on real devices, not simulators. Verify.
	Linking.openURL('mailto:thebananaapp@banana.org');
};

const openFacebook = () => {
	// TODO: Fix this navigation
	Linking.openURL('fb://profile?id=democracylaborg');
};
