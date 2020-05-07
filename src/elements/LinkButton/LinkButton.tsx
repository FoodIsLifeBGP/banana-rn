import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import * as colors from '@util/colors';
import styles from './LinkButton.styles';

interface LinkButtonProps {
	text: string;
	textColor?: string;
	borderColor?: string;
	disabled?: boolean;
	destination?: string;
	onPress?: (any) => void;
}

export default ({
	text,
	destination,
	textColor = colors.NAVY_BLUE,
	borderColor = colors.BANANA_YELLOW,
	disabled = false,
	onPress = () => {},
}: LinkButtonProps) => {
	const { navigate } = useNavigation();
	const buttonFunction = destination
		? () => navigate(destination)
		: onPress && (func => onPress(func));

	console.log(textColor);
	//styles.text.color = textColor;
	//styles.textContainer.borderBottomColor = borderColor;
	if (disabled === true) {
		styles.textContainer.borderBottomColor = colors.DARK_GRAY;
	}

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
	);
};
