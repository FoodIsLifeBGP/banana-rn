import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Menu, Divider } from 'react-native-paper';
import Icon from '../Icon';
import styles from './HamburgerPopupMenu.styles';
import * as strings from '../../util/strings';
import { useNavigation } from 'react-navigation-hooks';


export default () => {
	const [ visible, setVisibility ] = useState(false);

	const { navigate } = useNavigation();

	const toggleVisibility = () => setVisibility(!visible);

	return (
		<View style={[styles.menuContainer]}>
			<Menu
				visible={visible}
				onDismiss={toggleVisibility}
				anchor={
					<TouchableOpacity onPress={toggleVisibility}>
						<Icon name="menu" />
					</TouchableOpacity>
				}
			>
				<Menu.Item style={styles.menuItem} onPress={() => {navigate('QRCodeScannerScreen');}} title={
					<Text style={styles.menuItemText} >
						{strings.SCAN_QR_CODE}
					</Text>
				} />
				<Divider />
				<Menu.Item onPress={() => {}} style={styles.menuItem} title={
					<Text style={styles.menuItemText}>
						{strings.MY_PROFILE}
					</Text>
				} />
				<Divider />
				<Menu.Item onPress={() => {}} style={styles.menuItem} title={
					<Text style={styles.menuItemText}>
						{strings.LOG_OUT}
					</Text>
				} />
			</Menu>
		</View>
	);
}