import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const MAP_HEIGHT = height - (Platform.OS === 'ios' ? 120 : 60);
export default StyleSheet.create({
	map: {
		width,
		height: MAP_HEIGHT,
	},
});
