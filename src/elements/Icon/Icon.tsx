import React from 'react';
import {
	Image,
} from 'react-native';
import { NAVY_BLUE } from '@util/colors';

interface IconProps {
	name: IconName | DeprecatedIconName;
	size: number;
	color?: string; // TODO: make icons color dynamic
}

export default ({ name, size, color = NAVY_BLUE }: IconProps) => {
	const nameIsDeprecated = Object.keys(deprecatedIconMap).includes(name);
	const validIconName = nameIsDeprecated ? (deprecatedIconMap[name] || '') : name;

	const getDimensions = () => {
		let width = size;
		let height = size;

		// Adjust dimensions for non-square icons
		// Operand = dimension of SVG divided by dimen sion of base icon
		if (name.includes('menu')) {
			width *= (27 / 24.0);
			height *= (23 / 24.0);
		} else if (name.includes('bell')) {
			height *= (26 / 24.0);
		}

		return { width, height };
	};

	const getOffset = () => {
		const x = 0;
		let y = 0;

		if (name.includes('menu')) {
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

	const source = iconFiles[validIconName];
	const dimensions = getDimensions();
	const offset = getOffset();

	return (
		<Image
			style={[ dimensions, offset ]}
			source={source}
		/>
	);
};


const deprecatedIconMap: Record<DeprecatedIconName, IconName> = {
	'chevron-down': 'expand',
	'chevron-left': 'back',
	image: 'camera',
	lock: 'eyeOff',
	unlock: 'eyeOn',
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

export const iconFiles: Record<IconName, NodeRequire> = {
	arrowDown: require('@assets/icons/ICON_ARROW-DOWN.svg'),
	arrowUp: require('@assets/icons/ICON_ARROW-UP.svg'),
	back: require('@assets/icons/ICON_BACK.svg'),
	bell: require('@assets/icons/ICON_BELL.svg'),
	bellOn: require('@assets/icons/ICON_BELL-ON.svg'),
	bike: require('@assets/icons/ICON_BIKE.svg'),
	camera: require('@assets/icons/ICON_CAMERA.svg'),
	claims: require('@assets/icons/ICON_CLAIMS.svg'),
	close: require('@assets/icons/ICON_CLOSE.svg'),
	condense: require('@assets/icons/ICON_CONDENSE.svg'),
	distance: require('@assets/icons/ICON_DISTANCE.svg'),
	donations: require('@assets/icons/ICON_DONATIONS.svg'),
	dropdown: require('@assets/icons/ICON_DROPDOWN.svg'),
	email: require('@assets/icons/ICON_EMAIL.svg'),
	expand: require('@assets/icons/ICON_EXPAND.svg'),
	eyeOff: require('@assets/icons/ICON_EYE-OFF.svg'),
	eyeOn: require('@assets/icons/ICON_EYE-ON.svg'),
	facebook: require('@assets/icons/ICON_FACEBOOK.svg'),
	help: require('@assets/icons/ICON_HELP.svg'),
	logout: require('@assets/icons/ICON_LOGOUT.svg'),
	menu: require('@assets/icons/ICON_MENU.svg'),
	menuOn: require('@assets/icons/ICON_MENU-ON.svg'),
	more: require('@assets/icons/ICON_MORE.svg'),
	qrCode: require('@assets/icons/ICON_QR-CODE.svg'),
	settings: require('@assets/icons/ICON_SETTINGS.svg'),
	time: require('@assets/icons/ICON_TIME.svg'),
	transit: require('@assets/icons/ICON_TRANSIT.svg'),
	user: require('@assets/icons/ICON_USER.svg'),
	walk: require('@assets/icons/ICON_WALK.svg'),
	website: require('@assets/icons/ICON_WEBSITE.svg'),
};
