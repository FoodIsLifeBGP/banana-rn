import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { TouchableOpacity } from 'react-native';
import Icon from '../Icon';


export default () => {
	const { toggleDrawer } = useNavigation();

	return (
		<TouchableOpacity onPress={toggleDrawer}>
			<Icon name="menu" />
		</TouchableOpacity>
	);
};
