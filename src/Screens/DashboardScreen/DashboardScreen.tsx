import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text, Button } from 'react-native';
import styles from './DashboardScreen.styles';

export default () => {
	const { navigate } = useNavigation();
	return (
		<View style={styles.container}>
			<Text>Dashboard</Text>
			<Button
				title="Login"
				onPress={() => navigate('LoginScreen')}
			/>
		</View>
	);
};
