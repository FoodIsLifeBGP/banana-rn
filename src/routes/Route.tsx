import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import * as colors from '@util/colors';
import getEnv from '@util/environment';

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
import SubMenu from '../elements/MenuDrawer/SubMenu/SubMenu';
import MainMenu from '../elements/MenuDrawer/MainMenu/MainMenu';

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
				drawerLabel: <MainMenu text="Scan QR Code" icon="qrCode" />,
			},
		},
		DashboardScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: <MainMenu text="Donations" icon="claims" />,
			},
		},
		Active: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: <SubMenu text="Active" />,
			},
		},
		History: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: <SubMenu text="History" />,
			},
		},
	};

	const CLIENT_MENU = {
		DonationScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: <MainMenu text="Donations" icon="donations" />,
			},
		},

		DashboardScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: <MainMenu text="Claims" icon="claims" />,
			},
		},

		Pending: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: <SubMenu text="Pending" />,
			},
		},

		History: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: <SubMenu text="History" />,
			},
		},
	};

	const COMMON_MENU = {

		HelpScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: <MainMenu text="Contact Us" icon="help" />,
			},
		},

		LogoutScreen: {
			screen: LogoutScreen,
			navigationOptions: {
				drawerLabel: <MainMenu text="Log Out" icon="logout" />,
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
