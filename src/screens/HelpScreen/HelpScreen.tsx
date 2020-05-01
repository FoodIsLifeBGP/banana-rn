import React from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	ScrollView,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { Linking } from 'expo';
import {
	SpacerInline,
	Header,
	ContentHeader,
	Icon,
} from '@elements';
import styles, { HelpListItemStyles } from './HelpScreen.styles';


export default () => (
	<View style={styles.outerContainer}>
		<Header showMenu={true} />
		{/* Delete spacer after TopBar/NavBar is fixed/ added */}
		<SpacerInline height={1} />

		<ContentHeader title="Help" headerSize="large" />

		<ScrollView contentContainerStyle={styles.contentContainer}>
			<View style={styles.helpList}>
				{
					helpItems.map(({ text, destination, link }) => (
						<HelpListItem
							key={text}
							text={text}
							destination={destination}
							link={link}
						/>
					))
				}
			</View>
		</ScrollView>
	</View>
);


type HelpItem = {
	text: string;
	link?: string;
	destination?: string; // TODO: create type from screen titles and use here
};
type HelpItemProps = HelpItem;

const HelpListItem = ({
	text,
	destination,
	link,
}: HelpItemProps) => {
	const { navigate } = useNavigation();

	const handlePress = () => {
		if (destination) {
			navigate(destination);
		} else if (link) {
			Linking.openURL(link);
		} else {
			throw new Error('Link or destination is required.');
		}
	};

	return (
		<TouchableHighlight onPress={handlePress}>
			<View style={HelpListItemStyles.container}>
				<Text style={HelpListItemStyles.text}>
					{text}
				</Text>

				<View style={HelpListItemStyles.icon}>
					<Icon name="more" size={24} />
				</View>
			</View>
		</TouchableHighlight>
	);
};

// Menu item contents for the Help menu
const helpItems: Array<HelpItem> = [
	{
		text: 'FAQ',
		destination: 'FaqScreen',
	},
	{
		text: 'Tutorial',
		link: 'https://www.youtube.com/watch?v=Psax2CCcJEI',
	},
	{
		text: 'Contact Us',
		destination: 'ContactScreen',
	},
];
