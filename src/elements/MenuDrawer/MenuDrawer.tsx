import React from 'react';
import {
	Text,
	View,
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useGlobal from '@state';
import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import MainOption from './MainOption/MainOption';
import styles from './MenuDrawer.styles';

const MenuDrawer = props => {
	const [ state, actions ] = useGlobal() as any;
	const { navigate, toggleDrawer } = useNavigation() as any;
	const { logOut } = actions;
	const name = state.user.organization_name ? state.user.organization_name : state.user.first_name;

	return (
		<ScrollView>
			<View style={styles.drawerHeader}>
				<Text style={{ ...styles.username, marginBottom: 0 }}>Hello,</Text>
				<Text style={styles.username}>{name}</Text>
			</View>
			<SafeAreaView
				style={styles.container}
			>
				<DrawerItemList
					{... props}
					labelStyle={styles.labelText}
					itemStyle={styles.menuItem}
					onItemPress={() => console.log('Hailey Bieber')}
				/>
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
			</SafeAreaView>
			{/* <SafeAreaView
				style={styles.container}
			>
				<DrawerItem
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
			</TouchableOpacity> */}
		</ScrollView>
	);
};

export default MenuDrawer;
