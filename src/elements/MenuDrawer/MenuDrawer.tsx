import React from 'react';
import {
	Text,
	View,
	ScrollView,
	SafeAreaView,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import { DrawerItems } from 'react-navigation-drawer';
import { useNavigation } from 'react-navigation-hooks';
import useGlobal from '@state';
import { SpacerInline } from '@elements';
import styles from './MenuDrawer.styles';

const MenuDrawer = props => {
	const [ globalState, globalActions ] = useGlobal() as any;
	const { navigate, toggleDrawer } = useNavigation();
	const { logOut } = globalActions;
	const loginScreen = 'LoginScreen';

	return (
		<ScrollView>
			<View style={styles.drawerHeader}>
				<View style={styles.avatar}>
					<Avatar.Image
						size={100}
						source={require('@assets/images/banana-icon.png')}
					/>
				</View>
				<View style={styles.drawerHeaderBuffer}>
					<Text style={styles.username}>Foods 4 U</Text>
				</View>
			</View>
			<SafeAreaView
				style={styles.container}
			>
				<DrawerItems
					{...props}
					labelStyle={styles.labelText}
					itemStyle={styles.menuItem}
					onItemPress={async ({ route }) => {
						toggleDrawer();
						navigate(route.routeName);
						if (route.routeName === loginScreen) {
							await logOut();
						}
					}}
				/>
				<SpacerInline height={20} />
			</SafeAreaView>
		</ScrollView>
	);
};

export default MenuDrawer;
