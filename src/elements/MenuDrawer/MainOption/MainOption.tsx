import React from 'react';
import { Text, View } from 'react-native';

import { Icon } from '@elements';
import { IconName } from '@elements/Icon';
import * as colors from '@util/colors';

import styles from './MainOption.styles';

function MainOption({ icon, text }) {
	let menuStyle = {};
	console.log('Main Option: ', text);

	const DrawerIcon = (name: IconName) => Icon({
		name,
		size: 24,
		color: colors.WHITE,
	});

	if (text === 'Log Out' || text === 'Scan QR Code') {
		console.log(`I came in to the IF block because text = ${text}`);
		menuStyle = {
			...styles.mainOption,
			...styles.logOut,
		};
	} else {
		console.log(`I came into the ELSE block because text= ${text}`);
		menuStyle = styles.mainOption;
	}

	return (
		<View style={menuStyle}>
			<View>
				{DrawerIcon(icon)}
			</View>
			<View>
				<Text style={styles.optionText}>{text}</Text>
			</View>
		</View>
	);
}

export default MainOption;