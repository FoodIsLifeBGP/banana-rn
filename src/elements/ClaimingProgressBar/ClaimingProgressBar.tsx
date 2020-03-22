import React from 'react';
import {
	StyleProp, Text, TextStyle,
	View,
} from 'react-native';
import styles from './ClaimingProgressBar.styles';

interface ClaimingProgressBarProps {
	width?: number | string;
	pickedUp: number;
	reserved: number;
	left: number;
	style?: StyleProp<TextStyle>;
}
/*
*
* */
export default ({
	width = '100%',
	pickedUp,
	reserved,
	left,
	style,
}: ClaimingProgressBarProps) => {
	const num2Str = (num, places) => String(num).padStart(places, '0');
	const total = pickedUp + reserved + left;
	return (
		<View style={[ styles.claimProgressBar, { width }, style ]}>
			<View style={styles.barContainer}>
				{pickedUp !== 0 && <View style={[ styles.pickUpBar, { flexGrow: pickedUp / total } ]} />}
				{reserved !== 0 && <View style={[ styles.reserveBar, { flexGrow: reserved / total } ]} />}
				{left !== 0 && <View style={[ styles.leftBar, { flexGrow: left / total } ]} />}
			</View>

			<View style={styles.textBoxContainer}>
				{pickedUp !== 0
				&& (
					<View style={styles.textBox}>
						<Text style={styles.textBold}>{num2Str(pickedUp, 2)}</Text>
						<Text>PICKED-UP</Text>
					</View>
				)}

				{reserved !== 0
				&& (
					<View style={styles.textBox}>
						<Text style={styles.textBold}>{num2Str(reserved, 2)}</Text>
						<Text>RESERVED</Text>
					</View>
				)}

				{left !== 0
				&& (
					<View style={styles.textBox}>
						<Text style={styles.textBold}>{num2Str(left, 2)}</Text>
						<Text>LEFT</Text>
					</View>
				)}
			</View>
		</View>
	);
};

