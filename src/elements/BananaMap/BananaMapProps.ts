import { Location } from '@state/index.types';
import { Region } from 'react-native-maps';

export interface BananaMapProps {
	donations: { } [];
	markerSize: number;
	clientLocation: Location;
	mapRegion: Region;
}
