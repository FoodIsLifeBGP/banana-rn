import React, { useEffect, useRef, useState } from 'react';
import {
	Animated, Dimensions, Text, View,
} from 'react-native';
import { useIsFocused, useNavigation, useNavigationParam } from 'react-navigation-hooks';
import useGlobal from '@state';
import {
	Title, SpacerInline, NavBar, Icon, SelfMarker,
} from '@elements';
import MapView, { Marker } from 'react-native-maps';
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
	const { navigate, goBack } = useNavigation();
	const [ donations, setDonations ] = useState([]);
	const { width, height } = Dimensions.get('window');
	const { latitude, longitude } = state.user.coords;
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
		if (donations && donations.length !== 0) return;
		const { getDonationsForClient } = actions;
		const data = await getDonationsForClient();
		if (data) {
			setDonations(data);
		}
	};
	const getMarkerSizeByDelta = () => {
		if (location.longitudeDelta > 0.03) return 24;
		return 36;
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
				onMap={() => { }}
				onList={() => goBack()}
				position="map"
			/>
			<MapView
				initialRegion={location}
				onRegionChange={(region => setLocation(region))}
				style={styles.map}
			>
				{(donations as any).map(item => {
					const { id, food_name } = item;
					// waiting for distance function
					const distance = 42;
					return (
						<DonationMarker
							key={id}
							coordinate={{
								latitude: parseFloat(item.donor.latitude),
								longitude: parseFloat(item.donor.longitude),
							}}
							size={getMarkerSizeByDelta()}
							onPress={() => alert('claimDetailScreen unimplemented')}
							itemName={food_name}
							distance={distance}
						/>
					);
				})}

				<SelfMarker
					coordinate={{
						latitude,
						longitude,
					}}
				/>
			</MapView>
		</View>
	);
};

export default MapScreen;
