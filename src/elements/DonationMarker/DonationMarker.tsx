import { Location } from '@state/index.types';
import { Marker } from 'react-native-maps';
import { Animated, Text, View } from 'react-native';
import * as colors from '@util/colors';
import React, { useEffect, useRef } from 'react';
import { Icon } from '@elements';
import styles from './DonationMarker.styles';


interface DonationMarkerProps{
	coordinate: Location;
	onPress: () => any;
	itemName: string;
	distance: number;
	size: number;
}

export default ({
	coordinate, onPress, itemName, distance, size,
}: DonationMarkerProps) => (
	<Marker
		coordinate={coordinate}
		onPress={onPress}
		style={styles.container}
	>
		<Icon name="bananaMarker" size={size} />
		{size > 24 && (
			<View style={[ styles.textContainer, styles.smallMarginLeft ]}>
				<Text style={[ styles.text, styles.textBold ]}>
					{itemName}
				</Text>
				<Text style={[ styles.text ]}>
					{`${distance} MI`}
				</Text>

			</View>
		)}
	</Marker>
);
