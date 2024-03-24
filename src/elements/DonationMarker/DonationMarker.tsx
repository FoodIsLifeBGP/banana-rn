import { Location } from '@state/index.types';
import { Marker } from 'react-native-maps';
// import {
//   Animated, Text, View,
// } from "react-native";
// import * as colors from "@util/constants/colors";
import React from 'react';
import { Icon } from '@elements';
import styles from './DonationMarker.styles';

interface DonationMarkerProps {
  coordinate: Location;
  onPress: () => any;
  size: number;
}

export default function DonationMarker({
  coordinate,
  onPress,
  size,
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
