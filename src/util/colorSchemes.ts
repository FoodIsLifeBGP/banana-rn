/**
 * Provides infrastructure for color scheme and palette declaration.
 *
 * Consideration when using a color scheme:
 *   - Text elements that are nested within an element that is assigned a color
 *     scheme must have the 'color' property set to 'inherit' in order to use
 *     a parent's themed text color without having to deconstruct the style object
 *     and apply the properties individually.
 */

import { TextStyle } from 'react-native';
import { ColorSchemeName } from 'react-native-appearance';
import * as colors from '@util/colors';

/**
 * palette   = Background  = Text
 * ---------------------------------------
 * default   = Grey        = Blue
 * primary   = Blue        = White
 * secondary = Yellow      = Blue
 * tertiary  = Transparent = Blue
 * accent    = Red         = White
 * disabled  = Light gray  = White
 */
export type ColorPalette = 'default' | 'primary' | 'secondary' | 'tertiary' | 'accent' | 'disabled';

export type ColorScheme = Record<ColorPalette, Partial<TextStyle>>;

const lightScheme: ColorScheme = {
	default: {
		backgroundColor: colors.GRAY,
		color: colors.NAVY_BLUE,
	},
	primary: {
		backgroundColor: colors.NAVY_BLUE,
		color: colors.WHITE,
	},
	secondary: {
		backgroundColor: colors.BANANA_YELLOW,
		color: colors.NAVY_BLUE,
	},
	tertiary: {
		backgroundColor: 'transparent',
		color: colors.NAVY_BLUE,
	},
	accent: {
		backgroundColor: colors.RED,
		color: colors.WHITE,
	},
	disabled: {
		backgroundColor: colors.LIGHT_GRAY_DISABLED,
		color: colors.WHITE,
	},
};

export const COLOR_SCHEMES: Record<ColorSchemeName, ColorScheme> = {
	light: lightScheme,
	dark: lightScheme, // TODO: Add dark theme when available
	'no-preference': lightScheme,
};
