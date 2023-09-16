import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';
import { Location } from '@state/index.types';
import { Marker } from 'react-native-maps';
import * as colors from '@util/colors';

import { Icon } from '@elements/Icon';

import styles from './DonationMarker.styles';


interface DonationMarkerProps{
	coordinate: Location;
	onPress: () => any;
	size: number;
}

export default function ({
	coordinate, onPress, size,
}: DonationMarkerProps) {
	return (
		<Marker
			coordinate={coordinate}
			onPress={onPress}
			style={styles.container}
		>
			<Icon name="bananaMarker" size={size} />
		</Marker>
	);
}
