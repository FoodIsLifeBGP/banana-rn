import React from 'react';
import { Text, View } from 'react-native';

import { Icon } from '@elements';
import { IconName } from '@elements/Icon';
import * as colors from '@util/colors';

import styles from './MainMenu.styles';

const MainMenu = props => {
	let menuStyle = {};
	const { icon, text } = props;

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
	} else {
		menuStyle = styles.mainMenu;
	}


	return (
		<View style={menuStyle}>
			<View>
				{DrawerIcon(icon)}
			</View>
			<View>
				<Text style={styles.menuText}>{text}</Text>
			</View>
		</View>
	);
};


export default MainMenu;
