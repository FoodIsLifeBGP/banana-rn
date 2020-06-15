import React from 'react';
import {
	Text,
	View,
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { useNavigation } from 'react-navigation-hooks';
import useGlobal from '@state';
import MainOption from './MainOption/MainOption';
import styles from './MenuDrawer.styles';

const MenuDrawer = props => {
	const [ state, actions ] = useGlobal() as any;
	const { navigate, toggleDrawer } = useNavigation();
	const { logOut } = actions;
	const name = state.user.organization_name;

	return (
		<ScrollView>
			<View style={styles.drawerHeader}>
				<Text style={{ ...styles.username, marginBottom: 0 }}>Hello,</Text>
				<Text style={styles.username}>{name}</Text>
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
					}}
				/>
			</SafeAreaView>
			<TouchableOpacity
				style={styles.menuItem}
				onPress={async () => {
					toggleDrawer();
					navigate('LogoutScreen');
					await logOut();
				}}
			>
				<MainOption
					icon="logout"
					text="Log Out"
				/>
			</TouchableOpacity>
		</ScrollView>
	);
};

export default MenuDrawer;
