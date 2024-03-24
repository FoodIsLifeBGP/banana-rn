import {
  LOCATION_FOREGROUND,
  PermissionStatus,
  askAsync,
} from 'expo-permissions';
import { getCurrentPositionAsync } from 'expo-location';
import Constants from 'expo-constants';

export const getLocation = async () => {
  const { status }: { status: PermissionStatus } = await askAsync(LOCATION_FOREGROUND);
  if (status === 'granted') {
    try {
      const { coords } = await getCurrentPositionAsync();
      return { coords };
    } catch (e: any) {
      console.log(e);
      /*
       NOTE: In the event that you're testing in browser or not able to get a location,
       if you have 'EXPO_USE_DEFAULT_LOCATION=true' in your .env file, this will return a default location
      */
      if (
        Constants.manifest
        && Constants.manifest.extra
        && Constants.manifest.extra.useDefaultLocation
      ) {
        const dummyLocation = {
          latitude: 47.609175,
          longitude: -122.325849,
        };

        return { coords: dummyLocation };
      }
    }
  }
  return {
    latitude: 47.609175,
    longitude: -122.325849,
  };
};
