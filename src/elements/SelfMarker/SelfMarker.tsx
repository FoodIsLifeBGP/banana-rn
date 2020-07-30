import { Location } from '@state/index.types';
import { Marker } from 'react-native-maps';
import { Animated, View } from 'react-native';
import * as colors from '@util/colors';
import React, { useEffect, useRef } from 'react';
import styles from './SelfMarker.styles';


interface SelfMarkerProps{
	coordinate: Location;
}

export default ({ coordinate }: SelfMarkerProps) => {
	const radius = useRef(new Animated.Value(10)).current;
	const ANI_DURATION = 3000;
	useEffect(() => {
		Animated.loop(Animated.sequence(
			[
				Animated.timing(radius, {
					toValue: 20,
					duration: ANI_DURATION,
				}),
				Animated.timing(radius, {
					toValue: 13,
					duration: ANI_DURATION,
				}),
			],
		)).start();
	}, [ radius ]);
	return (
		<Marker
			coordinate={coordinate}
		>
			<Animated.View
				style={{
					borderRadius: 10,
					width: radius,
					height: radius,
					backgroundColor: 'rgba(8,58,155,0.5)',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<View style={{
					borderRadius: 5,
					width: 10,
					height: 10,
					backgroundColor: colors.NAVY_BLUE,
				}}
				/>
			</Animated.View>
		</Marker>
	);
};
