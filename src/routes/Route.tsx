import React from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
import DonorHistoryScreen from '../screens/DonorHistoryScreen/DonorHistoryScreen';
import MapScreen from '../screens/MapScreen/MapScreen';

import MenuDrawer from '../elements/MenuDrawer/MenuDrawer';
import MainOption from '../elements/MenuDrawer/MainOption/MainOption';
import SubOption from '../elements/MenuDrawer/SubOption/SubOption';
import ClaimDetailsScreen from '../screens/ClaimDetailsScreen/ClaimDetailsScreen';
import ClientClaimsScreen from '../screens/ClientClaimsScreen';
import ClientHistoryScreen from '../screens/ClientHistoryScreen';

const MainStack = createStackNavigator();

export default function MainStackNavigator() {
	return (
		<MainStack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
			<MainStack.Screen name="Login" component={LoginScreen} />
			<MainStack.Screen name="ClientClaims" component={ClientClaimsScreen} />
			<MainStack.Screen name="ClientHistory" component={ClientHistoryScreen} />
			<MainStack.Screen name="DonorDashboard" component={DonorDashboardScreen} />
			<MainStack.Screen name="LoginSuccess" component={LoginSuccessScreen} />
			<MainStack.Screen name="Donation" component={DonationScreen} />
			<MainStack.Screen name="DonorDonation" component={DonorDonationScreen} />
			<MainStack.Screen name="DonorHistory" component={DonorHistoryScreen} />
			<MainStack.Screen name="QRCodeScanner" component={QRCodeScannerScreen} />
			<MainStack.Screen name="ClaimDetails" component={ClaimDetailsScreen} />
			<MainStack.Screen name="MakeClaim" component={MakeClaimScreen} />
			<MainStack.Screen name="DonationsDetail" component={DonationsDetailScreen} />
			<MainStack.Screen name="Contact" component={ContactScreen} />
			<MainStack.Screen name="Logout" component={LogoutScreen} />
			<MainStack.Screen name="Map" component={MapScreen} />
		</MainStack.Navigator>
	);
}

// const Drawer = createDrawerNavigator();
