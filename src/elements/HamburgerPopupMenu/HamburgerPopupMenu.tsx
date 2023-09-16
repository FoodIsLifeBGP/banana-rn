import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@elements/Icon';
import { NAVBAR_ICON_SIZE } from '@util/constants';
import { useDrawerStatus } from '@react-navigation/drawer';
import NavigationService from '@util/NavigationService';

export default function () {
	// const { toggleDrawer } = useNavigation() as any;
	// console.log(useNavigation());
	const navigation = useNavigation();
	console.log('This is navigation');
	console.log(navigation);

	return (
		<TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
			<Icon name="menu" size={NAVBAR_ICON_SIZE} />
		</TouchableOpacity>
	);
}
