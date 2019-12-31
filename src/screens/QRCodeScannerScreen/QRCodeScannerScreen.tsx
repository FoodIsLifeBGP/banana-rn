import React, { useState, useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { Text, View, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarCodeMask from './BarCodeMask';
import styles from './QRCodeScannerScreen.styles';

export default () => {
	const { goBack } = useNavigation();
	const [ hasCameraPermission, setHasCameraPermission ] = useState(false);
	const [ scanned, setScanned ] = useState(null);

	const getPermissions = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		setHasCameraPermission(status === 'granted');
	};

	const handleBarCodeScanned = barcode => {
		setScanned(barcode);
		console.log(scanned);
		goBack();
	};

	const ScannerContent = () => {
		switch (hasCameraPermission) {
			case true: return (
				<>
					<BarCodeScanner
						onBarCodeScanned={handleBarCodeScanned}
						style={StyleSheet.absoluteFillObject}
					/>
					<BarCodeMask />
				</>
			);
			case false: return <Text>No access to camera</Text>;
			default: return <Text>Requesting permission to access camera</Text>;
		}
	};

	useEffect(() => {
		getPermissions();
	}, []);

	return (
		<View style={styles.container}>
			<ScannerContent />
		</View>
	);
};
