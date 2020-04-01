import React from 'react';
import {
	ScrollView,
	Text,
	TouchableHighlight,
	View,
} from 'react-native';
import { Linking } from 'expo';
import {
	Header,
	SpacerInline,
} from '@elements';
import styles, { ListItem } from './ContactScreen.styles';

// TODO: Update interface to use IconName type
const contactList: Array<{
	title: string;
	message: string;
	link: string;
	iconName: string;
}> = [
	{
		title: 'website',
		message: 'www.bananaapp.org',
		// TODO: update to website, when built
		link: 'https://bgpnow.wixsite.com/here/banana-app',
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
	// TODO: add scrollview depending on how UI team wants specific elements to scroll (or not)
	<View style={styles.outerContainer}>
		<Header showMenu={true} />
		{/* TODO: remove spacer after header is updated */}
		<SpacerInline height={1} />

		<View style={styles.header}>
			<Text style={styles.headerText}>Contact Us</Text>
		</View>

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
									{/* <Icon style={ListItem.titleIcon} name={contact.iconName} size={24} /> */}

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
