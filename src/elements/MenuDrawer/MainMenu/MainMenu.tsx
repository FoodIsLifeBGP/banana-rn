import React from 'react';
import { Text, View } from 'react-native';

import { Icon } from '@elements';
import { IconName } from '@elements/Icon';
import * as colors from '@util/colors';

import styles from './MainMenu.styles';

<<<<<<< HEAD
const MainMenu = ({ icon, text }) => {
	let menuStyle = {};

	const DrawerIcon = (name: IconName) => Icon({
		name,
		size: 24,
		color: colors.WHITE,
	});

	if (text === 'Log Out' || text === 'Scan QR Code') {
		menuStyle = {
			...styles.mainMenu,
			...styles.logOut,
		};
=======
const MainMenu = props => {
	let menuStyle = {};
	const { icon, text } = props;

	const DrawerIcon = (name: IconName) => Icon({
		name,
		size: 24,
		color: colors.WHITE,
	});

	if (text === 'Contact Us') {
		menuStyle = {
			...styles.mainMenu,
			...styles.contactUs,
		};
<<<<<<< HEAD
	} else if (props.text === 'Log out') {
<<<<<<< HEAD
		menuStyle = { ...styles.mainMenu, borderTopWidth: 0, marginTop: 30 };
>>>>>>> 4b6e506... Create React component that render MainMenu elements (Scan QR Code text and its icon, etc.)
=======
=======
	} else if (text === 'Log Out') {
>>>>>>> 6f11d20... Remove unnecessary styles.
		menuStyle = {
			...styles.mainMenu,
			...styles.logOut,
		};
>>>>>>> b81bef6... Clean up code.
	} else {
		menuStyle = styles.mainMenu;
	}

<<<<<<< HEAD
<<<<<<< HEAD
=======
	const DrawerIcon = (name: IconName) => Icon({
		name,
		size: 24,
		color: colors.WHITE,
	});
>>>>>>> 4b6e506... Create React component that render MainMenu elements (Scan QR Code text and its icon, etc.)
=======
>>>>>>> 6f11d20... Remove unnecessary styles.

	return (
		<View style={menuStyle}>
			<View>
<<<<<<< HEAD
<<<<<<< HEAD
				{DrawerIcon(icon)}
			</View>
			<View>
				<Text style={styles.menuText}>{text}</Text>
=======
				{DrawerIcon(props.icon)}
			</View>
			<View>
<<<<<<< HEAD
				<Text style={ styles.menuText }>{props.text}</Text>
>>>>>>> 4b6e506... Create React component that render MainMenu elements (Scan QR Code text and its icon, etc.)
=======
				<Text style={styles.menuText}>{props.text}</Text>
>>>>>>> 154e7eb... Fix linter issues.
=======
				{DrawerIcon(icon)}
			</View>
			<View>
				<Text style={styles.menuText}>{text}</Text>
>>>>>>> 6f11d20... Remove unnecessary styles.
			</View>
		</View>
	);
};


<<<<<<< HEAD
<<<<<<< HEAD
export default MainMenu;
=======
export default MainMenu;
>>>>>>> 4b6e506... Create React component that render MainMenu elements (Scan QR Code text and its icon, etc.)
=======
export default MainMenu;
>>>>>>> 6f11d20... Remove unnecessary styles.
