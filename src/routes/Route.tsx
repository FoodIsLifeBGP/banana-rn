import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import * as colors from '@util/colors';
import getEnv from '@util/environment';

// TODO: For some reason global imports aren't for these
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

import MenuDrawer from '../elements/MenuDrawer/MenuDrawer';
import SvgImage from '../elements/SvgImage/SvgImage';

// Logged-In Screens for Drawer Navigator
export const MainStack = createStackNavigator(
	{
		DashboardScreen,
		LoginSuccessScreen,
		DonationScreen,
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
				drawerIcon: <SvgImage source={require('@assets/icons/ICON_QR-CODE.svg')} />,
			},
		},
		DashboardScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: 'My Donations',
				drawerIcon: <SvgImage source={require('@assets/icons/ICON_DONATIONS.svg')} />,
			},
		},
	};

	const CLIENT_MENU = {
		DashboardScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: 'My Claims',
				drawerIcon: <SvgImage source={require('@assets/icons/ICON_CLAIMS.svg')} />,
			},
		},
	};

	const COMMON_MENU = {
		ProfileScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: 'My Profile',
				drawerIcon: <SvgImage source={require('@assets/icons/ICON_USER.svg')} />,
			},
		},
		SettingsScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: 'Settings',
				drawerIcon: <SvgImage source={require('@assets/icons/ICON_SETTINGS.svg')} />,
			},
		},
		HelpScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: 'Help',
				drawerIcon: <SvgImage source={require('@assets/icons/ICON_HELP.svg')} />,
			},
		},
		LogoutScreen: {
			screen: LogoutScreen,
			navigationOptions: {
				drawerLabel: 'Log Out',
				drawerIcon: <SvgImage source={require('@assets/icons/ICON_LOGOUT.svg')} />,
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
