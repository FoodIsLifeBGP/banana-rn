import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text, TouchableOpacity } from 'react-native';
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

	return (
		<View style={styles.container}>
			<TouchableOpacity
				disabled={disabled}
				activeOpacity={0.3}
				onPress={buttonFunction}
			>
				<View
					style={[
						styles.textContainer,
						{
							borderColor: disabled && borderColor === colors.BANANA_YELLOW
								? colors.LIGHT_YELLOW
								: borderColor,
						},
					]}
				>
					<Text
						style={[
							styles.text,
							{
								color: disabled && textColor === colors.NAVY_BLUE
									? colors.LIGHT_GRAY_DISABLED
									: textColor,
							},
						]}
					>
						{text.toUpperCase()}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};
