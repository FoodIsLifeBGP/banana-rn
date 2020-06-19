import React from 'react';
import {
	View,
	Image,
	TouchableOpacity,
	Alert
} from 'react-native';
import styles from './FloatingActionButton.styles';
import { Button, Icon } from '@elements';
import { ButtonStyle } from '@elements/Button';
import { IconName } from '../Icon/Icon.types';
import * as colors from '@util/colors';

interface FloatingActionProps {
	iconName: IconName;
	size?: number;
	onPress?: (any) => void;
}

export default ({
	iconName,
	size = 28.5,
	onPress = () => {},
}: FloatingActionProps) => {
	const buttonFunction = onPress && (func => onPress(func));
	const buttonStyle: ButtonStyle = {
		default: {
			background: colors.BANANA_YELLOW,
			foreground: colors.BANANA_YELLOW,
		},
		pressed: {
			background: colors.LIGHT_YELLOW,
			foreground: colors.LIGHT_YELLOW,
		}
	};
	return (
		<View style={styles.floatingContainer}>
			<View style={styles.ellipseContainer}>
				<Button buttonStyle={buttonStyle} onPress={buttonFunction} style={styles.iconContainer}>
					{foregroundColor => (<Icon name={iconName} size={size} color={foregroundColor}/>)}	
				</Button>
			</View>
		</View>
	);
};