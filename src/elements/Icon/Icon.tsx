import React from 'react';
import {
	View,
	Image,
	Platform,
	ImageURISource,
} from 'react-native';
import { NAVY_BLUE, RED } from '@util/colors';
import { SvgProps } from 'react-native-svg';
import {
	deprecatedIconMap,
	iconImports,
	IconName,
	DeprecatedIconName,
	IconImport,
} from './index';

interface IconProps {
	name: IconName | DeprecatedIconName;
	size: number;
	color?: string;
}

export default ({
	name,
	size,
	color = NAVY_BLUE,
}: IconProps) => {
	const nameIsDeprecated = Object.keys(deprecatedIconMap).includes(name);
	const validIconName = nameIsDeprecated ? (deprecatedIconMap[name] || '') : name;

	/**
	 * Returns the required dimensions for the base icon (e.g. the hamburger
	 * icon excluding the red dot) to be the given size.
	 */
	const getDimensions = () => {
		let width = size;
		let height = size;

		if (name.includes('menu')) {
			// Operand = dimension of SVG divided by dimension of base icon
			width *= (27 / 24.0);
			height *= (23 / 24.0);
		} else if (name.includes('bell')) {
			height *= (26 / 24.0);
		}

		return { width, height };
	};

	/**
	 * Returns the coordinate change required to center the base icon (e.g. the hamburger
	 * icon excluding the red dot).
	 */
	const getOffset = () => {
		const x = 0;
		let y = 0;

		if (name.includes('menu')) {
			// !! TODO: these should be calculated and added to a data structure with the imported icons.
			y = -1.25;
		} else if (name.includes('bell')) {
			y = -2;
		}

		return {
			transform: [
				{
					translateX: x,
				},
				{
					translateY: y,
				},
			],
		};
	};

	// If browser this is a data object. If mobile, this is object with Svg Component
	const IconSvg: IconImport = iconImports[validIconName];

	return (
		<View style={{
			position: 'relative',
			width: size,
			height: size,
			justifyContent: 'center',
			alignItems: 'center',
		}}
		>
			{
				Platform.OS === 'web'
					? (
						<Image
							source={IconSvg}
							style={[
								getDimensions(),
								getOffset(),
								{
									overflow: 'visible',
								},
							]}
						/>
					)
					: (
						// ?? TODO: overflow visible required?
						<IconSvg.default
							style={[
								getDimensions(),
								getOffset(),
								{ overflow: 'visible' },
							]}
							width={size}
							height={size}
							fill={color}
						/>
					)
			}
		</View>
	);
};
