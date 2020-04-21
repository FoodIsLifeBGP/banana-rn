import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@elements';


export default () => {
	const { toggleDrawer } = useNavigation();

	return (
		<TouchableOpacity onPress={toggleDrawer}>
			<Icon name="menu" size={24} />
		</TouchableOpacity>
	);
};
