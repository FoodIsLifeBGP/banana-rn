import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import getEnv from '@util/environment';

// TODO: For some reason global imports aren't for these
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import TermsScreen from '../screens/TermsScreen';
import ApplicationApprovedScreen from '../screens/ApplicationApprovedScreen';
import ApplicationPendingScreen from '../screens/ApplicationPendingScreen';
import ContactScreen from '../screens/ContactScreen';
import LoginSuccessScreen from '../screens/LoginSuccessScreen';
import DonationScreen from '../screens/DashboardScreen/DonationScreen';
import ClaimScreen from '../screens/DashboardScreen/ClaimScreen';
import QRCodeScannerScreen from '../screens/QRCodeScannerScreen/QRCodeScannerScreen';

import MenuDrawer from '../elements/MenuDrawer/MenuDrawer';
import SvgImage from '../elements/SvgImage/SvgImage';

// Logged-In Screens for Drawer Navigator
export const MainStack = createStackNavigator(
	{
		DashboardScreen,
		LoginSuccessScreen,
		DonationScreen,
		ClaimScreen,
		QRCodeScannerScreen,
	},
	{
		headerMode: 'none',
		initialRouteName: 'DashboardScreen',
	},
);

const donorOrClientDrawer = () => {
	const { USER_IDENTITY } = getEnv();

	const DONOR_MENU = {
		'Scan QR Code': {
			screen: QRCodeScannerScreen,
			navigationOptions: {
				drawerLabel: 'Scan QR Code',
				drawerIcon: <SvgImage source={require('@assets/icons/ICON_QR_CODE(WHITE).svg')} />,
			},
		},
		'My Donations': {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: 'My Donations',
				drawerIcon: <SvgImage source={require('@assets/icons/ICON_DONATION(WHITE).svg')} />,
			},
		},
	};

	const CLIENT_MENU = {
		'My Profile': {
			screen: QRCodeScannerScreen,
			navigationOptions: {
				drawerLabel: 'Scan QR Code',
				drawerIcon: <SvgImage source={require('@assets/icons/ICON_QR_CODE(WHITE).svg')} />,
			},
		},
		'My Claims': {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: 'My Donations',
				drawerIcon: <SvgImage source={require('@assets/icons/ICON_DONATION(WHITE).svg')} />,
			},
		},
	};

	const LOGOUT = {
		'Log Out': {
			screen: LoginScreen,
			navigationOptions: {
				drawerLabel: 'Log Out',
				drawerIcon: <SvgImage source={require('@assets/icons/ICON_LOGOUT(WHITE).svg')} />,
			},
		},
	};

	return USER_IDENTITY === 'donor'
		? { ...DONOR_MENU, ...LOGOUT }
		: { ...CLIENT_MENU, ...LOGOUT };
};

// Drawer Navigator
export const Drawer = createDrawerNavigator(
	donorOrClientDrawer(),
	{
		contentComponent: MenuDrawer,
		drawerPosition: 'right',
		drawerBackgroundColor: 'transparent',
	},
);

// Full App Navigation - Includes Non-Logged in Screens
export const FullAppStack = createStackNavigator(
	{
		LoginScreen,
		RegistrationScreen,
		TermsScreen,
		ApplicationApprovedScreen,
		ApplicationPendingScreen,
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
