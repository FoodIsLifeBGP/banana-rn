import React, { useEffect, useState } from 'react';
import {
	SafeAreaView, Text, View, YellowBox,
} from 'react-native';
import { Provider } from 'react-native-paper';
import { AppearanceProvider } from 'react-native-appearance';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import NavigationService from '@util/NavigationService';
import { TheAlertModal } from '@elements';
import Route from './src/routes/Route';
import styles from './App.styles';

YellowBox.ignoreWarnings([
	'Warning: componentWillReceiveProps has been renamed',
	'Require cycle',
]);

export default function App() {
	const [ fontsLoaded, setFontsLoaded ] = useState(false);

	const loadFonts = async () => {
		await Font.loadAsync({
			// Expo doesn't currently (v36.0.0) support fontWeight or fontStyle
			'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
			'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
			'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
		});
		setFontsLoaded(true);
	};

	useEffect(() => {
		loadFonts();
	}, []);

	if (![ 'donor', 'client' ].includes(Constants.manifest.extra.variant)) {
		return (
			<View style={styles.container}>
				<Text style={styles.heading}>INCORRECT VARIANT SPECIFIED</Text>
				<Text style={styles.text}>You must specify 'donor' or 'client' in app.json (expo.extra.variant).</Text>
				<Text style={styles.text}>Refresh the app to see your changes.</Text>
			</View>
		);
	}

	return fontsLoaded && (
		<AppearanceProvider>
			{/* All elements within AppearanceProvider will have access
			 *  to the user-defined OS color theme preference: 'light', 'dark', 'no-preference'. */}
			<Provider>
				<SafeAreaView style={styles.container}>
					<Route ref={navRef => NavigationService.setTopLevelNavigator(navRef)} />
					<TheAlertModal />
				</SafeAreaView>
			</Provider>
		</AppearanceProvider>
	);
}
