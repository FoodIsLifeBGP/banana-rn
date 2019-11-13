import React from 'react';
import { View, Text } from 'react-native';
import styles from './Header.styles';

export default ({ backButtonText, backDestination }: { backButtonText: string; backDestination: string }) => (
	<View style={styles.container}>
		<View style={{ ...styles.contentContainer, justifyContent: 'flex-start' }}>
			<BackButton text={backButtonText} backDestination={backDestination} />
		</View>
	</View>);
