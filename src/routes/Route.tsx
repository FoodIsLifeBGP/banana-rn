import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import * as colors from '@util/colors';
import getEnv from '@util/environment';

import { Icon } from '@elements';
import { IconName } from '@elements/Icon';

import { Text, View } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import TermsScreen from '../screens/TermsScreen';
import ContactScreen from '../screens/ContactScreen';
import LoginSuccessScreen from '../screens/LoginSuccessScreen';
import DonationScreen from '../screens/DashboardScreen/DonationScreen';
import QRCodeScannerScreen from '../screens/QRCodeScannerScreen/QRCodeScannerScreen';
import ClaimDetailScreen from '../screens/ClaimDetailScreen/ClaimDetailScreen';
import LogoutScreen from '../screens/LogoutScreen';
import DonationsDetailScreen from '../screens/DonationsDetailScreen/DonationsDetailScreen';
import DonorDonationScreen from '../screens/DonorDashboardScreen/DonorDonationScreen';

import MenuDrawer from '../elements/MenuDrawer/MenuDrawer';

const DrawerIcon = (name: IconName) => Icon({
	name,
	size: 18,
	color: colors.WHITE,
});

const subDrawerLabel = {
	color: 'white',
	textTransform: 'uppercase',
	fontSize: 20,
	marginLeft: 'auto',
};

const logoutLabel = {
	...subDrawerLabel,
	fontWeight: 'bold',
	bottom: 0,
	marginTop: 75,
};


// Logged-In Screens for Drawer Navigator
export const MainStack = createStackNavigator(
	{
		DashboardScreen,
		LoginSuccessScreen,
		DonationScreen,
		DonorDonationScreen,
		QRCodeScannerScreen,
		ClaimDetailScreen,
		DonationsDetailScreen,
	},
	{
		headerMode: 'none',
		initialRouteName: 'DashboardScreen',
	},
);

const donorOrClientDrawer = () => {
	const { USER_IDENTITY } = getEnv();

	const DONOR_MENU = {
		QRCodeScannerScreen: {
			screen: QRCodeScannerScreen,
			navigationOptions: {
				drawerLabel: 'Scan QR Code',
				drawerIcon: DrawerIcon('qrCode'),
			},
		},
		DashboardScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: 'Donations',
				drawerIcon: DrawerIcon('claims'),
			},
		},
		// Active
		Active: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: () => <Text style={{ ...subDrawerLabel, marginBottom: 15, marginTop: 10 }}> Active </Text>,
			},
		},
		// History
		History: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: () => <Text style={{ ...subDrawerLabel, marginBottom: 10, marginTop: 15 }}> History </Text>,
			},
		},
	};

	const CLIENT_MENU = {
		DashboardScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: 'Claims',
				drawerIcon: DrawerIcon('claims'),
			},
		},
	};

	const COMMON_MENU = {
		/* Temporarily Disabled
		ProfileScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: 'My Profile',
				drawerIcon: DrawerIcon('user'),
			},
		},
		SettingsScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: 'Settings',
				drawerIcon: DrawerIcon('settings'),
			},
		},
		*/
		HelpScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: 'Contact Us',
				drawerIcon: DrawerIcon('help'),
			},
		},
		LogoutScreen: {
			screen: LogoutScreen,
			navigationOptions: {
				drawerLabel: () => <Text style={logoutLabel}>Log out</Text>,
				drawerIcon: () => <View style={{ marginTop: logoutLabel.marginTop }}>{DrawerIcon('logout')}</View>,
			},
		},
	};

	return USER_IDENTITY === 'donor'
		? { ...DONOR_MENU, ...COMMON_MENU }
		: { ...CLIENT_MENU, ...COMMON_MENU };
};

// Drawer Navigator
export const Drawer = createDrawerNavigator(
	donorOrClientDrawer(),
	{
		contentComponent: MenuDrawer,
		drawerPosition: 'right',
		drawerBackgroundColor: colors.NAVY_BLUE,
	},
);

// Full App Navigation - Includes Non-Logged in Screens
export const FullAppStack = createStackNavigator(
	{
		LoginScreen,
		RegistrationScreen,
		TermsScreen,
		ContactScreen,
		Drawer,
	},
	{
		defaultNavigationOptions: {
			header: null,
			gesturesEnabled: false,
		},
		headerMode: 'none',
		initialRouteName: 'LoginScreen',
	},
);

const DonorRoute = createAppContainer(FullAppStack);

export default DonorRoute;
