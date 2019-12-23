import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import TermsScreen from '../screens/TermsScreen';
import ApplicationApprovedScreen from '../screens/ApplicationApprovedScreen';
import ApplicationPendingScreen from '../screens/ApplicationPendingScreen';
import ContactScreen from '../screens/ContactScreen';
import LoginSuccessScreen from '../screens/LoginSuccessScreen';
import DonationScreen from '../screens/DashboardScreen/DonationScreen';
import QRCodeScannerScreen from '../screens/QRCodeScannerScreen/QRCodeScannerScreen';

import MenuDrawer from '../elements/MenuDrawer/MenuDrawer';

// Logged-In Screens for Drawer Navigator
export const MainStack = createStackNavigator(
	{
		DashboardScreen,
		LoginSuccessScreen,
		DonationScreen,
		QRCodeScannerScreen
	},
	{
		headerMode: 'none',
		initialRouteName: 'DashboardScreen',
	}
);

// Drawer Navigator
export const Drawer = createDrawerNavigator(
	{
		'Scan QR Code': {
			screen: QRCodeScannerScreen,
		},
		'My Donations': {
			screen: MainStack
		},
		'Log Out': {
			screen: LoginScreen // not a real log out yet
		},
	},
	{
		contentComponent: MenuDrawer,
		drawerPosition: 'right',
	}
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
		Drawer
	},
	{
		defaultNavigationOptions: {
			header: null,
			gesturesEnabled: false,
		},
		headerMode: 'none',
		initialRouteName: 'LoginScreen',
	}
);

const Route = createAppContainer(FullAppStack);

export default Route;