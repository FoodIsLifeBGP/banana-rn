// TODO: remove this disable any line
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { DonationMarker } from '@elements/DonationMarker';
import MapView, { Marker } from 'react-native-maps';
import { navigate } from '@util/navigationService';
import styles from './BananaMap.styles';
import { BananaMapProps } from './BananaMapProps';

function BananaMap({
  donations,
  markerSize,
  clientLocation,
  mapRegion,
}: BananaMapProps) {
  return (
    <MapView initialRegion={mapRegion} style={styles.map}>
      {(donations as any).map(donation => {
        const { id } = donation;
        return (
          <DonationMarker
            key={id}
            coordinate={{
              latitude: parseFloat(donation.donor.latitude),
              longitude: parseFloat(donation.donor.longitude),
            }}
            size={markerSize}
            onPress={() => navigate('MakeClaimScreen', {
              donation,
              id,
            })}
          />
        );
      })}

      <Marker coordinate={clientLocation} />
    </MapView>
  );
}

export default BananaMap;
