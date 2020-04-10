import { SvgProps } from 'react-native-svg';

/**
 * All SVG imports are transformed into functional react components via
 * the react-native-svg-transformer library.
 */
import ArrowDown from '@assets/icons/ICON_ARROW-DOWN.svg';
import ArrowUp from '@assets/icons/ICON_ARROW-UP.svg';
import Back from '@assets/icons/ICON_BACK.svg';
import Bell from '@assets/icons/ICON_BELL.svg';
import BellOn from '@assets/icons/ICON_BELL-ON.svg';
import Bike from '@assets/icons/ICON_BIKE.svg';
import Camera from '@assets/icons/ICON_CAMERA.svg';
import Claims from '@assets/icons/ICON_CLAIMS.svg';
import Close from '@assets/icons/ICON_CLOSE.svg';
import Condense from '@assets/icons/ICON_CONDENSE.svg';
import Distance from '@assets/icons/ICON_DISTANCE.svg';
import Donations from '@assets/icons/ICON_DONATIONS.svg';
import Dropdown from '@assets/icons/ICON_DROPDOWN.svg';
import Email from '@assets/icons/ICON_EMAIL.svg';
import Expand from '@assets/icons/ICON_EXPAND.svg';
import EyeOff from '@assets/icons/ICON_EYE-OFF.svg';
import EyeOn from '@assets/icons/ICON_EYE-ON.svg';
import Facebook from '@assets/icons/ICON_FACEBOOK.svg';
import Help from '@assets/icons/ICON_HELP.svg';
import Logout from '@assets/icons/ICON_LOGOUT.svg';
import Menu from '@assets/icons/ICON_MENU.svg';
import MenuOn from '@assets/icons/ICON_MENU-ON.svg';
import More from '@assets/icons/ICON_MORE.svg';
import QrCode from '@assets/icons/ICON_QR-CODE.svg';
import Settings from '@assets/icons/ICON_SETTINGS.svg';
import Time from '@assets/icons/ICON_TIME.svg';
import Transit from '@assets/icons/ICON_TRANSIT.svg';
import User from '@assets/icons/ICON_USER.svg';
import Walk from '@assets/icons/ICON_WALK.svg';
import Website from '@assets/icons/ICON_WEBSITE.svg';


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

// Mapping of old icon names to new icon names
export const deprecatedIconMap: Record<DeprecatedIconName, IconName> = {
	'chevron-down': 'expand',
	'chevron-left': 'back',
	image: 'camera',
	lock: 'eyeOff',
	unlock: 'eyeOn',
};

export const Icons: Record<IconName, React.FC<SvgProps>> = {
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
