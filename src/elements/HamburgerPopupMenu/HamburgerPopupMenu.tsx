import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from '../Icon';
import { useNavigation } from 'react-navigation-hooks';


export default () => {
	const { toggleDrawer } = useNavigation();

	return (
		<TouchableOpacity onPress={toggleDrawer}>
			<Icon name="menu" />
		</TouchableOpacity>
	);
}