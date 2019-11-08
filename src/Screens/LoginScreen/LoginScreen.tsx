import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text, Button, Alert } from 'react-native';
import styles from './LoginScreen.styles';

export default () => {
	const { navigate } = useNavigation();
	return (
		<View style={styles.container}>
			<Text>Login</Text>
			<Button
				title="Dashboard"
				onPress={() => navigate('Dashboard')}
			/>
		</View>
	);
};

