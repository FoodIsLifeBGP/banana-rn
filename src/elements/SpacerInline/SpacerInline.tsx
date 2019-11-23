import React from 'react';
import { View } from 'react-native';

interface Spacer {
	height?: number | string;
	width?: number | string;
}

export default ({ height, width }: Spacer) => <View style={{ height, width }} />;
