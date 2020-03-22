import { askAsync, LOCATION, PermissionStatus } from 'expo-permissions';
import { getCurrentPositionAsync } from 'expo-location';

export const getLocation = async store => {
	const { status }: { status: PermissionStatus } = await askAsync(LOCATION);
	if (status === 'granted') {
		const { coords } = await getCurrentPositionAsync({});
		await store.setState({ coords });
		return coords;
	}
	// switch to return a null position when device position API is available;
	return {
		latitude: 47.618249,
		longitude: 122.3520729,
	};

	// if latitute and longtitute are set to null
	// There would be a weird mistake that the browser could not get list of item even if
	// the position check logic at backend is turned off
	return {
		latitude: 47.618249,
		longitude: 122.3520729,
	};
};
