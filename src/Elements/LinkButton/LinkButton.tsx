import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import styles from './LinkButton.styles';

export default ({ text, destination }: { text: string; destination: string }) => {
	const { navigate } = useNavigation();
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text
					style={styles.text}
					onPress={() => navigate(destination)}
				>
					{text.toUpperCase()}
				</Text>
			</View>
		</View>
	)
};
