import React from 'react';
import {
	ScrollView,
	Text,
	TouchableHighlight,
	View,
} from 'react-native';
import { Linking } from 'expo';
import {
	ContentHeader,
	NavBar,
	SpacerInline,
	Icon,
} from '@elements';
import { IconName } from '@elements/Icon';
import styles, { ListItem } from './ContactScreen.styles';

const contactList: Array<{
	title: string;
	message: string;
	link: string;
	iconName: IconName;
}> = [
	{
		title: 'website',
		message: 'www.bananaapp.org',
		link: 'https://www.bananaapp.org',
		iconName: 'website',
	},
	{
		title: 'email',
		message: 'info@bananapp.org',
		// TODO: Supposedly this link works on real devices, not simulators. Verify.
		link: 'mailto:info@bananapp.org',
		iconName: 'email',
	},
	{
		title: 'facebook',
		message: 'Connect with us on Facebook!',
		// TODO: Fix this navigation
		link: 'fb://profile?id=democracylaborg',
		iconName: 'website',
	},
];

export default () => (
	<View style={styles.outerContainer}>
		<NavBar />

		<ContentHeader title="Contact Us" />

		<ScrollView style={styles.bodyContainer}>
			{/* Body Message */}
			<View style={styles.bodyMessage}>
				<Text style={styles.bodyMessageTitle}>
					We are here to help.
				</Text>

				<Text style={styles.bodyMessageBody}>
					{
						'Feel free to reach out to us with any questions or inquiries!'
						+ ' \nWe will get back to you in 1-2 business days.'
					}
				</Text>
			</View>

			{/* Contact List */}
			<View>
				{
					contactList.map((contact, i) => (
						<TouchableHighlight key={contact.title} onPress={() => Linking.openURL(contact.link)}>
							<View style={[ ListItem.container, i === 0 && ListItem.firstContainer ]}>
								<View style={ListItem.title}>
									<View style={ListItem.titleIcon}>
										<Icon name={contact.iconName} size={24} />
									</View>

									<Text style={ListItem.titleText}>
										{contact.title}
									</Text>
								</View>

								<Text style={ListItem.message}>
									{contact.message}
								</Text>
							</View>
						</TouchableHighlight>
					))
				}
			</View>
		</ScrollView>
	</View>
);
