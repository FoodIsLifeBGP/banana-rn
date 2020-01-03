import React, { useEffect, useState } from 'react';
import { View, YellowBox, Text } from 'react-native';
import { Provider } from 'react-native-paper';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import NavigationService from '@util/NavigationService';
import DonorRoute from './src/routes/DonorRoute';
import ClientRoute from './src/routes/ClientRoute';
import styles from './App.styles';

YellowBox.ignoreWarnings([
	'Warning: componentWillReceiveProps has been renamed',
]);

export default function App() {
	const [ fontsLoaded, setFontsLoaded ] = useState(false);

	// Here we get the variant name from the 'extra' field in app.json to load the correct navigation.
	const { variant } = Constants.manifest.extra;
	const RouteProvider = () => {
		switch (variant) {
			case 'client': return <DonorRoute ref={navRef => NavigationService.setTopLevelNavigator(navRef)} />;
			case 'donor': return <ClientRoute ref={navRef => NavigationService.setTopLevelNavigator(navRef)} />;
			default: return (
				<View style={styles.container}>
					<Text style={styles.heading}>INCORRECT VARIANT SPECIFIED</Text>
					<Text style={styles.text}>You must specify 'donor' or 'client' in app.json (expo.extra.variant).</Text>
					<Text style={styles.text}>Refresh the app to see your changes.</Text>
				</View>
			);
		}
	};

	const loadFonts = async () => {
		await Font.loadAsync({
			'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
			'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
			'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
			'elegant-icons': require('./assets/fonts/ElegantIcons.ttf'),
		});
		setFontsLoaded(true);
	};

	useEffect(() => {
		loadFonts();
	}, []);


	return fontsLoaded && (
		<Provider>
			<View style={styles.container}>
				<RouteProvider />
			</View>
		</Provider>
	);
}
