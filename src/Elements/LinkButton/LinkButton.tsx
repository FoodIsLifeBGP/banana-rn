import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import styles from './LinkButton.styles';

interface LinkButtonProps {
	text: string;
	destination?: string;
	onPress?: (any) => void;
}

export default ({ text, destination, onPress }: LinkButtonProps) => {
	const { navigate } = useNavigation();
	const buttonFunction = destination
		? () => navigate(destination)
		: func => onPress(func);

	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text
					style={styles.text}
					onPress={buttonFunction}
				>
					{text.toUpperCase()}
				</Text>
			</View>
		</View>
	)
};
