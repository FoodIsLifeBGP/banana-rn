import React from 'react';
import {
	View,
	Image,
	Platform,
	Text,
} from 'react-native';
import { NAVY_BLUE } from '@util/colors';
import {
	deprecatedIconMap,
	iconData,
	IconName,
	DeprecatedIconName,
} from './index';

interface IconProps {
	name: IconName | DeprecatedIconName;
	size: number;
	color?: string;
}

export default ({ name, size, color = NAVY_BLUE }: IconProps) => {
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
			// !! TODO: these should be calculated
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

	const iconCapta = iconData[validIconName];

	console.log(iconCapta);

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
							source={iconCapta}
							style={[
								getDimensions(),
								getOffset(),
								{
									overflow: 'visible',
								},
							]}

							stroke="pink"
							fill="pink"
						/>
					)
					: <Text>Mobile</Text>
			}
			{/* //?? TODO: overflow visible required? */}
			{/* <IconSvg
				style={[
					getDimensions(),
					getOffset(),
					{ overflow: 'visible' },
				]}
				width={size}
				height={size}
				fill={RED}
			/> */}
		</View>
	);
};
