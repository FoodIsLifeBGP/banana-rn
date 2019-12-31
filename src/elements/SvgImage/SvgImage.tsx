import React from 'react';
import Image from 'react-native-remote-svg';

interface SvgImageProps {
	source: string;
}

export default ({ source }: SvgImageProps) => (
	<Image
		source={source}
	/>
);
