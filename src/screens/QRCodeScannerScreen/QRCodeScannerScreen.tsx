import React, { useState, useEffect } from 'react';
import * as colors from '@util/colors';
import { useNavigation } from 'react-navigation-hooks';
import {
	Text,
	View,
	StyleSheet,
	Image,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

import useGlobal from '@state';

import { Modal, TextButton, Icon } from '@elements';
import { ButtonStyle } from '@elements/Button';
import { categoryImage } from '@util/donationCategory';

import BarCodeMask from './BarCodeMask';
import styles from './QRCodeScannerScreen.styles';

export default () => {
	const { goBack } = useNavigation();
	const [ state, actions ] = useGlobal() as any;
	const { scan } = actions;
	const [ hasCameraPermission, setHasCameraPermission ] = useState(false);
	const [ modalOn, setModalOn ] = useState(false);
	const [ claimedDonation, setClaimedDonation ] = useState({ food_name: '', claim: { client_name: '' } });
	// TBD.
	// const [ scannerActive, setScannerActive ] = useState(true);
	const [ icon, setIcon ] = useState(() => categoryImage(''));


	const buttonStyle: ButtonStyle = {
		default: {
			background: colors.NAVY_BLUE,
			foreground: colors.WHITE,
		},
	};

	const getTime = () => {
		const date = new Date();
		const hh = date.getHours();
		const mm = date.getMinutes();
		const AMPM = (hh > 12) ? 'PM' : 'AM';
		return `${(hh > 12) ? hh % 12 : hh}: ${(mm < 10) ? '0'.concat(mm.toString()) : mm} ${AMPM} `;
	};

	const getDate = () => new Date().toDateString().slice(4).split(' ')
		.join('/');

	const getPermissions = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		setHasCameraPermission(status === 'granted');
	};

	const handleBarCodeScanned = barcode => {
		const match = state.donationsOrClaims.filter(d => d.status === 'claimed' && d.claim.qr_code === barcode.data);
		if (match[0]) {
			// TBD
			// setScannerActive(false);
			scan(barcode.data).then(res => {
				if (res === 202) {
					setClaimedDonation(match[0]);
					setIcon(categoryImage(match[0].category));
					setModalOn(true);
				}
			});
		} else {
			setModalOn(true);
			console.log('No match found');
		}
	};

	// Triggers when user clicks outside of modal.
	// Resets value of scanned, and sets modalOn to false.
	const handleDismiss = () => {
		setClaimedDonation({ food_name: '', claim: { client_name: '' } });
		setModalOn(false);
		goBack();
	};

	// Switch for Modal Content.
	const ModalContent = () => {
		let content;
		if (claimedDonation.food_name) {
			content = (
				<>
					<Modal title="ITEM DONATED" open={modalOn} onDismiss={handleDismiss} palette="secondary">
						<View style={styles.content}>
							<Image source={icon} style={styles.icon} />
							<Text style={styles.claimTitle}>
								{claimedDonation.food_name}
							</Text>
							<View style={{ ...styles.textContainer, marginBottom: -100 }}>
								<Icon name="user" color="blue" size={20} />
								<Text style={styles.textStyle}>
									{claimedDonation.claim.client_name}
								</Text>
							</View>
							<View style={{ ...styles.textContainer, marginTop: 'auto', marginBottom: -80 }}>
								<Icon name="time" color="blue" size={20} />
								<Text style={styles.textStyle}>
									{getTime()}
									{getDate()}
								</Text>
							</View>
							<TextButton
								text="OK"
								textStyle={styles.buttonTextStyle}
								buttonStyle={buttonStyle}
								onPress={handleDismiss}
							/>
						</View>
					</Modal>
				</>
			);
		} else {
			content = (
				<>
					<Modal title="SOMETHING WENT WRONG" open={modalOn} onDismiss={handleDismiss} palette="secondary">
						<View style={styles.content}>
							<Image source={icon} style={styles.icon} />
							<Text style={{ ...styles.textStyle, fontWeight: 'bold' }}>PLEASE TRY AGAIN</Text>
							<View style={{ ...styles.errorContainer, marginVertical: 20 }}>
								<Text style={styles.errorStyle}>QR Code Scan was not successful.</Text>
								<Text style={styles.errorStyle}>If this issue is not resolved,</Text>
								<Text style={styles.errorStyle}>Please contact us.</Text>
							</View>
							<TextButton
								text="OK"
								textStyle={styles.buttonTextStyle}
								buttonStyle={buttonStyle}
								onPress={handleDismiss}
							/>
						</View>
					</Modal>
				</>
			);
		}
		return content;
	};

	const ScannerContent = () => {
		switch (hasCameraPermission) {
			case true: return (
				<>
					{/* scannerActive conditional goes here  */}
					<BarCodeScanner
						onBarCodeScanned={handleBarCodeScanned}
						style={StyleSheet.absoluteFillObject}
					/>
					<BarCodeMask />
					<ModalContent />
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
