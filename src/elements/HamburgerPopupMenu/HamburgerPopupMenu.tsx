import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@elements';
import { NAVBAR_ICON_SIZE } from '@util/constants';


export default () => {
	const { toggleDrawer } = useNavigation();

	return (
		<TouchableOpacity onPress={toggleDrawer}>
			<Icon name="menu" size={NAVBAR_ICON_SIZE} />
		</TouchableOpacity>
	);
};
