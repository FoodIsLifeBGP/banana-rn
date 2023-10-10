import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import useGlobal from '@state';
import * as colors from '@util/colors';
import HamburgerPopupMenu from '@elements/HamburgerPopupMenu';
// import getEnv from '@util/environment';
import getEnv from '../util/environment';
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

const Drawer = createDrawerNavigator();
const FullStack = createStackNavigator();

export function DonorOrClientDrawer() {
	const { USER_IDENTITY } = getEnv();

	return (
		<Drawer.Navigator
			initialRouteName="LoginSuccess"
			screenOptions={{
				headerShown: false,
				drawerPosition: 'right',
			}}
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
						// options={{ drawerLabel: () => <MainOption text="Scan QR Code" icon="qrCode" /> }}
						options={{ drawerLabel: 'Scan QR Code' }}
					/>
					<Drawer.Screen
						name="DonorDashboardScreen"
						component={DonorDashboardScreen}
						// options={{ drawerLabel: () => <MainOption text="Donations" icon="claims" /> }}
						options={{ drawerLabel: 'Donations' }}
					/>
					<Drawer.Screen
						name="DonorHistoryScreen"
						component={DonorHistoryScreen}
						// options={{ drawerLabel: () => <SubOption text="History" /> }}
						options={{ drawerLabel: 'History' }}
					/>
					<Drawer.Screen
						name="DonorDonationScreen"
						component={DonationScreen}
						// options={{ drawerLabel: () => <SubOption text="History" /> }}
						options={{ drawerLabel: 'Make Donation' }}
					/>
				</>
			)}
			{USER_IDENTITY === 'client' && (
				<>
					<Drawer.Screen
						name="DashboardScreen"
						component={DashboardScreen}
						// options={{ drawerLabel: () => <MainOption text="Donations" icon="donations" /> }}
						options={{ drawerLabel: 'Donations' }}
					/>
					<Drawer.Screen
						name="ClientClaimsScreen"
						component={ClientClaimsScreen}
						// options={{ drawerLabel: () => <MainOption text="Claims" icon="claims" /> }}
						options={{ drawerLabel: 'Claims' }}
					/>
					<Drawer.Screen
						name="ClientHistoryScreen"
						component={ClientHistoryScreen}
						// options={{ drawerLabel: () => <SubOption text="History" /> }}
						options={{ drawerLabel: 'History' }}
					/>
				</>
			)}
			<Drawer.Screen
				name="ContactScreen"
				component={ContactScreen}
				// options={{ drawerLabel: () => <MainOption text="Contact Us" icon="help" /> }}
				options={{ drawerLabel: 'Contact Us' }}
			/>
			<Drawer.Screen
				name="LogoutScreen"
				component={LogoutScreen}
				// options={{ drawerLabel: () => <MainOption text="Contact Us" icon="help" /> }}
				options={{ drawerLabel: 'Logout' }}
			/>
		</Drawer.Navigator>
	);
}

export function FullStackNavigator() {
	const [ state ] = useGlobal();
	return (
		<FullStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
			<FullStack.Screen name="Login" component={LoginScreen} />
			{state.jwt ? (
				<FullStack.Group>
					<FullStack.Screen name="Drawer" component={DonorOrClientDrawer} />
					<FullStack.Screen name="DonorDonation" component={DonorDonationScreen} />
					<FullStack.Screen name="DonationScreen" component={DonationScreen} />
					<FullStack.Screen name="MapScreen" component={MapScreen} />
					<FullStack.Screen name="MakeClaim" component={MakeClaimScreen} />
					<FullStack.Screen name="Logout" component={LogoutScreen} />
					<FullStack.Screen name="ClaimDetails" component={ClaimDetailsScreen} />
					<FullStack.Screen name="DonationsDetailScreen" component={DonationsDetailScreen} />
				</FullStack.Group>
			) : (
				<FullStack.Group>
					<FullStack.Screen name="Register" component={RegistrationScreen} />
					<FullStack.Screen name="TermsScreen" component={TermsScreen} />
				</FullStack.Group>
			)}
			<FullStack.Screen name="ContactScreen" component={ContactScreen} />
		</FullStack.Navigator>
	);
}

