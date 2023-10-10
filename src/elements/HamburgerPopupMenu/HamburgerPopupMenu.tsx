import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@elements/Icon';
import { NAVBAR_ICON_SIZE } from '@util/constants';

function HamburgerPopupMenu() {
	const navigation = useNavigation();

	return (
		<TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
			<Icon name="menu" size={NAVBAR_ICON_SIZE} />
		</TouchableOpacity>
	);
}

export default HamburgerPopupMenu;
