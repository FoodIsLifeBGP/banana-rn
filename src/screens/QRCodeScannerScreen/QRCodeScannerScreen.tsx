import React, { useState, useEffect } from 'react';
import * as colors from '@util/colors';
import { useNavigation } from 'react-navigation-hooks';
import { Text, View, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { Modal, TextButton, Icon } from '@elements';
import { ButtonStyle } from '@elements/button';

import BarCodeMask from './BarCodeMask';
import styles from './QRCodeScannerScreen.styles';

export default () => {
	const { goBack } = useNavigation();
	const [ hasCameraPermission, setHasCameraPermission ] = useState(false);
	// Default value of data with empty string
	// QR code's data prop usually holds a string.
	const [ scanned, setScanned ] = useState({ data: '' });
	const [ modalOn, setModalOn ] = useState(false);

	const buttonStyle: ButtonStyle = {
		default: {
			background: colors.NAVY_BLUE,
			foreground: colors.WHITE,
		},
	};

	/* Random data */
	const data = {
		createdAt: new Date().toDateString().slice(4).split(' ')
			.join('/'),
		by: 'Ernest Bruno',
		name: 'Banana',
	};

	const getPermissions = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		setHasCameraPermission(status === 'granted');
	};

	const handleBarCodeScanned = barcode => {
		setScanned(barcode);
		setModalOn(true);
	};

	// Triggers when user clicks outside of modal.
	// Resets value of scanned, and sets modalOn to false.
	const handleDismiss = () => {
		setScanned({ data: '' });
		setModalOn(false);
	};

	// Switch for Modal Content.
	const ModalContent = () => {
		switch (scanned.data) {
			case ('Banana'): return (
				<>
					<Modal title="ITEM DONATED" open={modalOn} onDismiss={handleDismiss} palette="secondary">
						<View style={styles.content}>
							{/* Placeholder for the item photo */}
							<View style={styles.circle}
							/>
							<Text style={styles.textStyle}>{data.name}</Text>
							<View style={styles.details}>
								<Text>
									<Icon name="image" style={styles.iconStyle} />
									{data.by}
								</Text>
							</View>
							<View style={{ ...styles.details, marginBottom: 20 }}>
								<Text style={styles.textStyle}>
									<Icon name="unlock" style={styles.iconStyle} />
									{data.createdAt}
								</Text>
							</View>
							<TextButton text="OK" textStyle={{ fontSize: 12, paddingHorizontal: 15 }} buttonStyle={buttonStyle} onPress={handleDismiss} />
						</View>
					</Modal>
				</>
			);
			case ('Error'): return (
				<>
					<Modal title="SOMETHING WENT WRONG" open={modalOn} onDismiss={handleDismiss} palette="secondary">
						<View style={styles.content}>
							{/* Placeholder for the item photo */}
							<View style={styles.circle}
							/>
							<Text style={styles.textStyle}>PLEASE TRY AGAIN</Text>
							<View style={{ ...styles.details, marginVertical: 20 }}>
								<Text>QR Code Scan was not successful.</Text>
								<Text>If this issue is not resolved,</Text>
								<Text>Please contact us.</Text>
							</View>
							<TextButton text="OK" textStyle={{ fontSize: 12, paddingHorizontal: 15 }} buttonStyle={buttonStyle} onPress={handleDismiss} />
						</View>
					</Modal>
				</>
			);
			default: return (<></>);
		}
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
					{scanned && <ModalContent />}
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
