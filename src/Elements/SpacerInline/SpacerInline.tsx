import React from 'react';
import { View } from 'react-native';

interface Spacer {
	height: number;
}

export default ({ height }: Spacer) => <View style={{ height }} />;
