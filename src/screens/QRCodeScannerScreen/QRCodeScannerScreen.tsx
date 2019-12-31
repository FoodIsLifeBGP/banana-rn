import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class BarcodeScannerExample extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasCameraPermission: null,
			scanned: false,
		};
	}

	async componentDidMount() {
		this.getPermissionsAsync();
	}

	getPermissionsAsync = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	};

	handleBarCodeScanned = () => {
		alert('Bar code scanned!');
	};

	render() {
		const { hasCameraPermission, scanned } = this.state;

		if (hasCameraPermission === null) {
			return <Text>Requesting permission to access camera</Text>;
		}
		if (hasCameraPermission === false) {
			return <Text>No access to camera</Text>;
		}
		return (
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'flex-end',
				}}
			>
				<BarCodeScanner
					onBarCodeScanned={this.handleBarCodeScanned}
					style={StyleSheet.absoluteFillObject}
				/>
			</View>
		);
	}
}
