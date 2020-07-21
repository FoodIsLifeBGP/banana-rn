import { askAsync, LOCATION, PermissionStatus } from 'expo-permissions';
import { getCurrentPositionAsync } from 'expo-location';

export const getLocation = async store => {
	const { status }: { status: PermissionStatus } = await askAsync(LOCATION);
	if (status === 'granted') {
		const { coords } = await getCurrentPositionAsync({});
		await store.setState({ user: { ...store.state.user, coords } });
		return coords;
	}
	return {
		latitude: null,
		longitude: null,
	};
};
