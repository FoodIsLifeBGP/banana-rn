import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text, Button } from 'react-native';
import { Header, Title } from '../../elements';
import styles from './DashboardScreen.styles';

export default () => {
	const { navigate } = useNavigation();
	return (
		<View style={styles.container}>
			<Header showBackButton={false} />
			<Title text="Welcome Back!" />
		</View>
	);
};
