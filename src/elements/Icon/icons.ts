/**
 *
 */

import {
	DeprecatedIconName,
	IconImport,
	IconName,
} from './Icon.types';

const ArrowDown = require('@assets/icons/ICON_ARROW-DOWN.svg');
const ArrowUp = require('@assets/icons/ICON_ARROW-UP.svg');
const Back = require('@assets/icons/ICON_BACK.svg');
const Bell = require('@assets/icons/ICON_BELL.svg');
const BellOn = require('@assets/icons/ICON_BELL-ON.svg');
const Bike = require('@assets/icons/ICON_BIKE.svg');
const Camera = require('@assets/icons/ICON_CAMERA.svg');
const Claims = require('@assets/icons/ICON_CLAIMS.svg');
const Close = require('@assets/icons/ICON_CLOSE.svg');
const Condense = require('@assets/icons/ICON_CONDENSE.svg');
const Distance = require('@assets/icons/ICON_DISTANCE.svg');
const Donations = require('@assets/icons/ICON_DONATIONS.svg');
const Dropdown = require('@assets/icons/ICON_DROPDOWN.svg');
const Email = require('@assets/icons/ICON_EMAIL.svg');
const Expand = require('@assets/icons/ICON_EXPAND.svg');
const EyeOff = require('@assets/icons/ICON_EYE-OFF.svg');
const EyeOn = require('@assets/icons/ICON_EYE-ON.svg');
const Facebook = require('@assets/icons/ICON_FACEBOOK.svg');
const Help = require('@assets/icons/ICON_HELP.svg');
const Logout = require('@assets/icons/ICON_LOGOUT.svg');
const Menu = require('@assets/icons/ICON_MENU.svg');
const MenuOn = require('@assets/icons/ICON_MENU-ON.svg');
const More = require('@assets/icons/ICON_MORE.svg');
const QrCode = require('@assets/icons/ICON_QR-CODE.svg');
const Settings = require('@assets/icons/ICON_SETTINGS.svg');
const Time = require('@assets/icons/ICON_TIME.svg');
const Transit = require('@assets/icons/ICON_TRANSIT.svg');
const User = require('@assets/icons/ICON_USER.svg');
const Walk = require('@assets/icons/ICON_WALK.svg');
const Website = require('@assets/icons/ICON_WEBSITE.svg');

export const deprecatedIconMap: Record<DeprecatedIconName, IconName> = {
	'chevron-down': 'expand',
	'chevron-left': 'back',
	image: 'camera',
	lock: 'eyeOff',
	unlock: 'eyeOn',
};

export const iconImports: Record<IconName, IconImport> = {
	arrowDown: ArrowDown,
	arrowUp: ArrowUp,
	back: Back,
	bell: Bell,
	bellOn: BellOn,
	bike: Bike,
	camera: Camera,
	claims: Claims,
	close: Close,
	condense: Condense,
	distance: Distance,
	donations: Donations,
	dropdown: Dropdown,
	email: Email,
	expand: Expand,
	eyeOff: EyeOff,
	eyeOn: EyeOn,
	facebook: Facebook,
	help: Help,
	logout: Logout,
	menu: Menu,
	menuOn: MenuOn,
	more: More,
	qrCode: QrCode,
	settings: Settings,
	time: Time,
	transit: Transit,
	user: User,
	walk: Walk,
	website: Website,
};
