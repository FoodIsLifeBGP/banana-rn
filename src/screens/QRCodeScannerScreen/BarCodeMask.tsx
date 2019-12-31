import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from '../../elements/Icon';
import styles from './BarCodeMask.styles';

export default () => {
	const { navigate } = useNavigation();
	return (
		<>
			<View style={styles.top} />
			<View style={styles.bottom} />
			<View style={styles.left} />
			<View style={styles.right} />
			<View style={styles.xContainer}>
				<TouchableWithoutFeedback onPress={() => navigate('DashboardScreen')}>
					<Icon name="close" style={styles.x} />
				</TouchableWithoutFeedback>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.text}>
					{`
Place the QR code within the window to scan.
Set the brightness to maximum for best results.
					`}
				</Text>
			</View>
		</>
	);
};