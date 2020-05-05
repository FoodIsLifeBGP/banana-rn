import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Icon } from '@elements';
import styles from './BarCodeMask.styles';

export default () => {
	const { navigate } = useNavigation();
	return (
		<>
			<View style={styles.reticleUL} />
			<View style={styles.reticleUR} />
			<View style={styles.reticleDL} />
			<View style={styles.reticleDR} />
			<View style={styles.background} />
			<View style={styles.xContainer}>
				<TouchableWithoutFeedback onPress={() => navigate('DashboardScreen')}>
					<Icon name="chevron-left" size={48} color="gray" />
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={() => navigate('DashboardScreen')}>
					<Icon name="close" size={48} color="gray" />
				</TouchableWithoutFeedback>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.text}>
						Align QR code
				</Text>
				<Text style={styles.text}>
					within frame to scan
				</Text>
			</View>
		</>
	);
};
