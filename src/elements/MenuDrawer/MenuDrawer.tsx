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
import MainMenu from './MainMenu/MainMenu';
import styles from './MenuDrawer.styles';


const MenuDrawer = props => {
	const [ state, actions ] = useGlobal() as any;
	const { navigate, toggleDrawer } = useNavigation();
	const { logOut } = actions;
	const name = state.user.organization_name;

	return (
		<ScrollView>
			<View style={styles.drawerHeader}>
<<<<<<< HEAD
				<Text style={{ ...styles.username, marginBottom: 0 }}>Hello,</Text>
				<Text style={styles.username}>{name}</Text>
=======
				<Text style={styles.username}>Foods 4 U</Text>
				<View style={styles.avatar}>
					<Avatar.Image
						size={100}
						source={require('@assets/images/banana-icon.png')}
					/>
				</View>
				<View style={styles.drawerHeaderBuffer} />
>>>>>>> 5436728... Place username above Avatar. Keeping buffer.
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
				<MainMenu
					icon="logout"
					text="Log Out"
				/>
			</TouchableOpacity>
		</ScrollView>
	);
};

export default MenuDrawer;
