import React from 'react';
import { View } from 'react-native';

interface Spacer {
	height?: number;
	width?: number;
}

export default ({ height, width }: Spacer) => <View style={{ height, width }} />;
