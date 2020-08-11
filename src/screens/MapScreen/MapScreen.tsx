import React, { useEffect, useRef, useState } from 'react';
import {
	Animated, Dimensions, Text, View,
} from 'react-native';
import { useIsFocused, useNavigation, useNavigationParam } from 'react-navigation-hooks';
import useGlobal from '@state';
import {
	Title, SpacerInline, NavBar, Icon, SelfMarker,
} from '@elements';
import { DonationsOrClaims } from '@library';
import MapView, { Marker } from 'react-native-maps';
import { Location } from '@state/index.types';
import * as colors from '@util/colors';
import { DonationMarker } from '@elements/DonationMarker';
import styles from './MapScreen.styles';

interface MapProps{
	latitude: number;
	longitude: number;
	latitudeDelta: number;
	longitudeDelta: number;
}

const MapScreen = () => {
	const isFocused = useIsFocused();
	const [ state, actions ] = useGlobal() as any;
	const { getLocation } = actions;
	const { userIdentity } = state;
	const { navigate } = useNavigation();
	const [ donations, setDonations ] = useState([]);
	const { width, height } = Dimensions.get('window');
	const { longitude, latitude } = getLocation();
	const ASPECT_RATIO = width / height;
	const LATITUDE_DELTA = 0.05;

	// in case of virtual device, the position of client would be center of seattle.
	const [ location, setLocation ] = useState(
		{
			latitude: latitude || 47.618249,
			longitude: longitude || -122.3520729,
			latitudeDelta: LATITUDE_DELTA,
			longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
		} as MapProps,
	);

	const getDonationsFromAPI = async () => {
		const { getDonationsForClient } = actions;
		const data = await getDonationsForClient();
		if (data) {
			setDonations(data);
		}
	};

	useEffect(() => {
		if (isFocused) {
			getDonationsFromAPI();
		}
	}, [ isFocused ]);

	return (
		<View>
			<NavBar
				showBackButton={false}
				leftButton="qrCode"
				showSelector={true}
				onMap={() => {}}
				onList={() => navigate('DashboardScreen')}
				position="map"
			/>
			<MapView
				initialRegion={location}
				onRegionChange={setLocation}
				style={styles.map}
			>
				{(donations as any).map(item => {
					const { id, food_name } = item;
					const distance = 42;
					return (
						<DonationMarker
							key={id}
							coordinate={{
								latitude: parseFloat(item.donor.latitude),
								longitude: parseFloat(item.donor.longitude),
							}}
							onPress={() => alert('claimDetailScreen unimplemented')}
							itemName={food_name}
							distance={distance}
						/>
					);
				})}

				<SelfMarker
					coordinate={{
						latitude: 47.618249,
						longitude: -122.3520729,
					}}
				/>
			</MapView>
		</View>
	);
};

export default MapScreen;
