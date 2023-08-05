import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import * as colors from '@util/colors';
import getEnv from '@util/environment';

import HamburgerPopupMenu from '@elements/HamburgerPopupMenu';
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
// TODO: Delete MainStack and MainStackNavigator if it is unnecessary
const Drawer = createDrawerNavigator();
const FullStack = createStackNavigator();

export default function MainStackNavigator() {
	return (
		<MainStack.Navigator initialRouteName="ClientClaims" screenOptions={{ headerShown: false }}>
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

export const DonorOrClientDrawer = () => {
	const { USER_IDENTITY } = getEnv();

	return (
		<Drawer.Navigator
			initialRouteName={LoginSuccessScreen}
			drawerStyle={{ backgroundColor: colors.NAVY_BLUE }}
			screenOptions={{
				headerShown: false,
				drawerPosition: 'right',
			}}
			drawerContent={props => <MenuDrawer {...props} />}
		>
			<Drawer.Screen
				name="LoginSuccess"
				component={LoginSuccessScreen}
				options={{ drawerLabel: () => null }}
			/>
			{USER_IDENTITY === 'donor' && (
				<>
					<Drawer.Screen
						name="QRCodeScannerScreen"
						component={QRCodeScannerScreen}
						options={{ drawerLabel: () => <MainOption text="Scan QR Code" icon="qrCode" /> }}
					/>
					<Drawer.Screen
						name="DonorDashboardScreen"
						component={DonorDashboardScreen}
						options={{ drawerLabel: () => <MainOption text="Donations" icon="claims" /> }}
					/>
					<Drawer.Screen
						name="DonorHistoryScreen"
						component={DonorHistoryScreen}
						options={{ drawerLabel: () => <SubOption text="History" /> }}
					/>
				</>
			)}
			{USER_IDENTITY === 'client' && (
				<>
					<Drawer.Screen
						name="DashboardScreen"
						component={DashboardScreen}
						options={{ drawerLabel: () => <MainOption text="Donations" icon="donations" /> }}
					/>
					<Drawer.Screen
						name="ClientClaimsScreen"
						component={ClientClaimsScreen}
						options={{ drawerLabel: () => <MainOption text="Claims" icon="claims" /> }}
					/>
					<Drawer.Screen
						name="ClientHistoryScreen"
						component={ClientHistoryScreen}
						options={{ drawerLabel: () => <SubOption text="History" /> }}
					/>
				</>
			)}
			<Drawer.Screen
				name="ContactScreen"
				component={ContactScreen}
				options={{ drawerLabel: () => <MainOption text="Contact Us" icon="help" /> }}
			/>
		</Drawer.Navigator>
	);
};

export function FullStackNavigator() {
	return (
		<FullStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
			<FullStack.Screen name="Login" component={LoginScreen} />
			<FullStack.Screen name="Drawer" component={DonorOrClientDrawer} />
			<FullStack.Screen name="Logout" component={LogoutScreen} />
		</FullStack.Navigator>
	);
}

