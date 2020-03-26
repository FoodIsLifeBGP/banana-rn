import React from 'react';
import {
	Image,
	StyleProp,
	ImageStyle,
	ImageRequireSource,
} from 'react-native';
import { camelToUpperSkewer } from '@util/strings';
import styles from './Icon.styles';

interface IconProps {
	name: IconName | DeprecatedIconName;
	style?: StyleProp<ImageStyle>;
}

export default ({ name, style }: IconProps) => {
	/**
	 *
	 * @param iconName
	 */
	const getIconSource = (iconName: IconName | DeprecatedIconName): ImageRequireSource => {
		const getIconPath = (validIconName: IconName) => `@assets/icons/ICON_${camelToUpperSkewer(validIconName)}.svg`;
		const nameIsDeprecated = Object.keys(deprecatedIconMap).includes(iconName);

		const validIconName = nameIsDeprecated ? (deprecatedIconMap[iconName] || '') : iconName;

		// eslint-disable-next-line import/no-dynamic-require
		return require(getIconPath(validIconName));
	};

	return (
		<Image style={[ styles.icon, style ]} source={getIconSource(name)} />
	);
};


const deprecatedIconMap: Record<DeprecatedIconName, IconName | null> = {
	'chevron-down': 'expand',
	'chevron-left': 'back',
	image: 'camera',
	lock: null, // TODO: test if null is processed correctly --> i.e. no SVG is rendered w/o error
	unlock: null,
};

export type DeprecatedIconName =
		| 'chevron-down'
		| 'chevron-left'
		| 'image'
		| 'lock'
		| 'unlock';

export type IconName =
		| 'arrowDown'
		| 'arrowUp'
		| 'back'
		| 'bell'
		| 'bellOn'
		| 'bike'
		| 'camera'
		| 'claims'
		| 'close'
		| 'condense'
		| 'distance'
		| 'donations'
		| 'dropdown'
		| 'email'
		| 'expand'
		| 'eyeOff'
		| 'eyeOn'
		| 'facebook'
		| 'help'
		| 'logout'
		| 'menu'
		| 'menuOn'
		| 'more'
		| 'qrCode'
		| 'settings'
		| 'time'
		| 'transit'
		| 'user'
		| 'walk'
		| 'website';
