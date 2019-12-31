import React from 'react';
import { View, Text } from 'react-native';
import styles from './Title.styles';

export default ({ text }: { text: string }) => (
	<View>
		<Text style={styles.text}>{text.toUpperCase()}</Text>
	</View>
);
