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
	size: 24,
	color: colors.WHITE,
});

const mainDrawerLabel = {
	display: 'flex',
	width: '100%',
	paddingLeft: 5,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	borderTopWidth: 1,
	borderTopColor: 'white',
	paddingTop: 20,
	marginBottom: 15,
	marginTop: 5,
	letterSpacing: 0.5,
	fontSize: 20,
};

const subDrawerLabel = {
	color: 'white',
	textTransform: 'uppercase',
	fontSize: mainDrawerLabel.fontSize,
	marginLeft: 'auto',
	marginRight: 5,
	letterSpacing: mainDrawerLabel.letterSpacing,
};


const subMenu = text => <Text style={{ ...subDrawerLabel, marginBottom: 10 }}>{text}</Text>;

const mainMenu = (text, icon) => {
	let menuStyle = {};
	if (text === 'Contact Us') {
		menuStyle = {
			...mainDrawerLabel,
			marginBottom: 50,
		};
	} else if (text === 'Log out') {
		menuStyle = { ...mainDrawerLabel, borderTopWidth: 0, marginTop: 30 };
	} else {
		menuStyle = mainDrawerLabel;
	}

	return (
		<View style={menuStyle}>
			<View>
				{DrawerIcon(icon)}
			</View>
			<View>
				<Text style={{ ...subDrawerLabel, fontWeight: 'bold' }}>{text}</Text>
			</View>
		</View>
	);
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
				drawerLabel: mainMenu('Scan QR Code', 'qrCode'),
			},
		},
		DashboardScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: mainMenu('Donations', 'claims'),
			},
		},
		// Active
		Active: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: subMenu('Active'),
			},
		},
		// History
		History: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: subMenu('History'),
			},
		},
	};

	const CLIENT_MENU = {
		DonationScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: mainMenu('Donations', 'donations'),
			},
		},

		DashboardScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: 'Claims',
				drawerIcon: DrawerIcon('claims'),
			},
		},

		Pending: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: subMenu('Pending'),
			},
		},

		History: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: subMenu('History'),
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
				drawerLabel: mainMenu('Settings', 'settings'),
			},
		},
		*/

		HelpScreen: {
			screen: MainStack,
			navigationOptions: {
				drawerLabel: mainMenu('Contact Us', 'help'),
			},
		},

		LogoutScreen: {
			screen: LogoutScreen,
			navigationOptions: {
				drawerLabel: mainMenu('Log out', 'logout'),
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
