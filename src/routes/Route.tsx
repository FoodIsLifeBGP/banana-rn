import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import * as colors from '@util/colors';
import getEnv from '@util/environment';

import MakeClaimScreen from '../screens/MakeClaimScreen/MakeClaimScreen';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DonorDashboardScreen from '../screens/DonorDashboardScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import TermsScreen from '../screens/TermsScreen';
import ContactScreen from '../screens/ContactScreen';
import LoginSuccessScreen from '../screens/LoginSuccessScreen';
import DonationScreen from '../screens/DashboardScreen/DonationScreen';
import QRCodeScannerScreen from '../screens/QRCodeScannerScreen/QRCodeScannerScreen';
import LogoutScreen from '../screens/LogoutScreen';
import DonationsDetailScreen from '../screens/DonationsDetailScreen/DonationsDetailScreen';
import DonorDonationScreen from '../screens/DonorDashboardScreen/DonorDonationScreen';

import MenuDrawer from '../elements/MenuDrawer/MenuDrawer';
import MainOption from '../elements/MenuDrawer/MainOption/MainOption';
import SubOption from '../elements/MenuDrawer/SubOption/SubOption';
import ClaimDetailsScreen from '../screens/ClaimDetailsScreen/ClaimDetailsScreen';
import ClientClaimsScreen from '../screens/ClientClaimsScreen';

// Logged-In Screens for Drawer Navigator
export const MainStack = createStackNavigator(
	{
		DashboardScreen,
		ClientClaimsScreen,
		DonorDashboardScreen,
		LoginSuccessScreen,
		DonationScreen,
		DonorDonationScreen,
		QRCodeScannerScreen,
		ClaimDetailsScreen,
		MakeClaimScreen,
		DonationsDetailScreen,
		ContactScreen,
		LogoutScreen,
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
			screen: MainStack,
			navigationOptions: {
				drawerLabel: <MainOption text="Scan QR Code" icon="qrCode" />,
			},
		},
		DonorDashboardScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: <MainOption text="Donations" icon="claims" />,
			},
		},
	};

	const CLIENT_MENU = {
		DashboardScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: <MainOption text="Donations" icon="donations" />,
			},
		},

		ClientClaimsScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: <MainOption text="Claims" icon="claims" />,
			},
		},
	};

	const COMMON_MENU = {
		// HelpScreen: {
		// screen: MainStack,
		// navigationOptions: {
		// drawerLabel: <MainOption text="Contact Us" icon="help" />,
		// },
		// },
		ContactScreen: {
			screen: ContactScreen,
			navigationOptions: {
				drawerLabel: <MainOption text="Contact Us" icon="help" />,
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
