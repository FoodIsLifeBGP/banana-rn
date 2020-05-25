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
<<<<<<< HEAD

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

=======
>>>>>>> 1466eef... Modulize  mainMenu, subMenu and their styles -- put them in their own folders and as their own React elements and use them as appropriate.

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
<<<<<<< HEAD
<<<<<<< HEAD
				drawerLabel: <MainMenu text="Donations" icon="donations" />,
=======
				drawerLabel: <MainMenu text="Donations" icon="claims" />,
>>>>>>> 1466eef... Modulize  mainMenu, subMenu and their styles -- put them in their own folders and as their own React elements and use them as appropriate.
=======
				drawerLabel: <MainMenu text="Donations" icon="donations" />,
>>>>>>> c9cb6ad... Move misplaced component to proper field.
			},
		},

		DashboardScreen: {
			screen: MainStack,
			navigationOptions: {
<<<<<<< HEAD
<<<<<<< HEAD
				drawerLabel: <MainMenu text="Claims" icon="claims" />,
=======
				drawerLabel: 'Claims',
				drawerIcon: <MainMenu text="Claims" icon="claims" />,
>>>>>>> 1466eef... Modulize  mainMenu, subMenu and their styles -- put them in their own folders and as their own React elements and use them as appropriate.
=======
				drawerLabel: <MainMenu text="Claims" icon="claims" />,
>>>>>>> c9cb6ad... Move misplaced component to proper field.
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
<<<<<<< HEAD
=======
			},
		},

		LogoutScreen: {
			screen: LogoutScreen,
			navigationOptions: {
				drawerLabel: <MainMenu text="Log out" icon="logout" />,
>>>>>>> 1466eef... Modulize  mainMenu, subMenu and their styles -- put them in their own folders and as their own React elements and use them as appropriate.
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
