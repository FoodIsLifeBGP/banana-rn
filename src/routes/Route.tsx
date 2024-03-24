import React, { useRef, useEffect } from 'react';
import getEnv from '@util/environment';
import { setTopLevelNavigator } from '@util/navigationService';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MakeClaimScreen from '../screens/MakeClaimScreen/MakeClaimScreen';
import LoginScreen from '../screens/LoginScreen';
import ClientDashboardScreen from '../screens/ClientDashboardScreen';
import DonorDashboardScreen from '../screens/DonorDashboardScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import TermsScreen from '../screens/TermsScreen';
import ContactScreen from '../screens/ContactScreen';
import LoginSuccessScreen from '../screens/LoginSuccessScreen';
import DonationScreen from '../screens/ClientDashboardScreen/DonationScreen';
import QRCodeScannerScreen from '../screens/QRCodeScannerScreen/QRCodeScannerScreen';
import LogoutScreen from '../screens/LogoutScreen';
import DonationsDetailScreen from '../screens/DonationsDetailScreen/DonationsDetailScreen';
import DonorDonationScreen from '../screens/DonorDashboardScreen/DonorDonationScreen';
import DonorHistoryScreen from '../screens/DonorHistoryScreen/DonorHistoryScreen';
import MapScreen from '../screens/MapScreen/MapScreen';

import MainOption from '../elements/MenuDrawer/MainOption/MainOption';
import SubOption from '../elements/MenuDrawer/SubOption/SubOption';
import ClaimDetailsScreen from '../screens/ClaimDetailsScreen/ClaimDetailsScreen';
import ClientClaimsScreen from '../screens/ClientClaimsScreen';
import ClientHistoryScreen from '../screens/ClientHistoryScreen';

function donorOrClientDrawer() {
  const { USER_IDENTITY } = getEnv();

  const DONOR_MENU = {
    'Scan QR Code': {
      component: QRCodeScannerScreen,
      options: { drawerLabel: () => <MainOption text="Scan QR Code" icon="qrCode" /> },
    },
    Donations: {
      component: DonorDashboardScreen,
      options: { drawerLabel: () => <MainOption text="Donations" icon="claims" /> },
    },
    History: {
      component: DonorHistoryScreen,
      options: { drawerLabel: () => <SubOption text="History" /> },
    },
  };

  const CLIENT_MENU = {
    Donations: {
      component: ClientDashboardScreen,
      options: { drawerLabel: () => <MainOption text="Donations" icon="donations" /> },
    },
    Claims: {
      component: ClientClaimsScreen,
      options: { drawerLabel: () => <MainOption text="Claims" icon="claims" /> },
    },
    History: {
      component: ClientHistoryScreen,
      options: { drawerLabel: () => <SubOption text="History" /> },
    },
  };

  const COMMON_MENU = {
    'Contact Us': {
      component: ContactScreen,
      options: { drawerLabel: () => <MainOption text="Contact Us" icon="help" /> },
    },
  };

  return USER_IDENTITY === 'donor'
    ? {
      ...DONOR_MENU,
      ...COMMON_MENU,
    }
    : {
      ...CLIENT_MENU,
      ...COMMON_MENU,
    };
}

/* Drawer Navigator */
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const menuOptions = donorOrClientDrawer();

  return (
    <Drawer.Navigator>
      {/*
         Create a Screen for each side drawer menu option.
         The name and component are taken from the key-value pairs in menuOptions.
         The options object is passed as is.
      */}
      {Object.entries(menuOptions).map(([ name, config ]) => (
        <Drawer.Screen
          key={name}
          name={name}
          component={config.component}
          options={config.options}
        />
      ))}
    </Drawer.Navigator>
  );
}

/* full app navigation --includes logged-out screens */
const Stack = createNativeStackNavigator();

function StackNavigator() {
  const { USER_IDENTITY } = getEnv();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName="LoginScreen"
    >
      {/* Common screens TODO: verify that these are correct */}
      <Stack.Screen name="LoginSuccessScreen" component={LoginSuccessScreen} />
      <Stack.Screen name="ContactScreen" component={ContactScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="LogoutScreen" component={LogoutScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="TermsScreen" component={TermsScreen} />
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
      />

      {/* Donor-specific screens */}
      {USER_IDENTITY === 'donor' && (
        <>
          <Stack.Screen name="DonorDashboardScreen" component={DonorDashboardScreen} />
          <Stack.Screen name="DonorDonationScreen" component={DonorDonationScreen} />
          <Stack.Screen name="DonorHistoryScreen" component={DonorHistoryScreen} />
        </>
      )}

      {/* Client-specific screens */}
      {USER_IDENTITY === 'client' && (
        <>
          <Stack.Screen name="ClientDashboardScreen" component={ClientDashboardScreen} />
          <Stack.Screen name="ClientClaimsScreen" component={ClientClaimsScreen} />
          <Stack.Screen name="ClientHistoryScreen" component={ClientHistoryScreen} />
          <Stack.Screen name="DonationScreen" component={DonationScreen} />
          <Stack.Screen name="QRCodeScannerScreen" component={QRCodeScannerScreen} />
          <Stack.Screen name="ClaimDetailsScreen" component={ClaimDetailsScreen} />
          <Stack.Screen name="MakeClaimScreen" component={MakeClaimScreen} />
          <Stack.Screen name="DonationsDetailScreen" component={DonationsDetailScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const navigationRef = useRef(null);

  useEffect(() => {
    setTopLevelNavigator(navigationRef.current);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  );
}
