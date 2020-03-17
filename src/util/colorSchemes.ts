/**
 * Provides infrastructure for color scheme and palette declaration.
 * @packageDocumentation
 */

import { TextStyle } from 'react-native';
import { ColorSchemeName } from 'react-native-appearance';
import * as colors from '@util/colors';

/**
 * default  = Gray background, blue text.
 * primary  = Blue background, white text.
 * accent   = Red background, white text.
 * disabled = Light gray background.
 * active   = Yellow background, blue text.
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

/**
 * Consideration when using:
 *   - Text elements that are nested within an element that is assigned a color
 *     scheme must have the 'color' property set to 'inherit' in order to use
 *     a parent's themed text color without having to deconstruct the style object
 *     and apply the properties individually.
 */
export const COLOR_SCHEMES: Record<ColorSchemeName, ColorScheme> = {
	light: lightScheme,
	dark: lightScheme,
	'no-preference': lightScheme,
};
