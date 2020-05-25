import React from 'react';
import { Text, View } from 'react-native';

import { Icon } from '@elements';
import { IconName } from '@elements/Icon';
import * as colors from '@util/colors';

import styles from './MainMenu.styles';

const MainMenu = props => {
	let menuStyle = {};
	if (props.text === 'Contact Us') {
		menuStyle = {
			...styles.mainMenu,
			marginBottom: 50,
			borderBottomWidth: 1,
			borderBottomColor: colors.WHITE,
			paddingBottom: 20,
		};
	} else if (props.text === 'Log out') {
		menuStyle = { ...styles.mainMenu, borderTopWidth: 0, marginTop: 30 };
	} else {
		menuStyle = styles.mainMenu;
	}

	const DrawerIcon = (name: IconName) => Icon({
		name,
		size: 24,
		color: colors.WHITE,
	});

	return (
		<View style={menuStyle}>
			<View>
				{DrawerIcon(props.icon)}
			</View>
			<View>
				<Text style={styles.menuText}>{props.text}</Text>
			</View>
		</View>
	);
};


export default MainMenu;