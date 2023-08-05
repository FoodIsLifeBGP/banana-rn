/**
 * Provides infrastructure for color scheme and palette declaration.
 */

// import { ColorSchemeName, useColorScheme } from 'react-native-appearance';
import { useColorScheme } from 'react-native';
import * as colors from '@util/colors';

/**
 * | PaletteName | Background  | Foreground  |
 * | ----------- | ----------- | ----------- |
 * | default     | grey        | blue        |
 * | primary     | blue        | white       |
 * | secondary   | yellow      | blue        |
 * | tertiary    | transparent | blue        |
 * | accent      | red         | white       |
 * | disabled    | light grey  | white       |
 */
export type ColorPaletteName = 'default' | 'primary' | 'secondary' | 'tertiary' | 'accent' | 'disabled';
export type ColorPalette = {
	background: string;
	foreground: string;
};
export type ColorScheme = Record<ColorPaletteName, ColorPalette>;

const lightScheme: ColorScheme = {
	default: {
		background: colors.GRAY,
		foreground: colors.NAVY_BLUE,
	},
	primary: {
		background: colors.NAVY_BLUE,
		foreground: colors.WHITE,
	},
	secondary: {
		background: colors.BANANA_YELLOW,
		foreground: colors.NAVY_BLUE,
	},
	tertiary: {
		background: 'transparent',
		foreground: colors.NAVY_BLUE,
	},
	accent: {
		background: colors.RED,
		foreground: colors.WHITE,
	},
	disabled: {
		background: colors.LIGHT_GRAY_DISABLED,
		foreground: colors.WHITE,
	},
};

/* eslint-disable no-tabs */
// export const COLOR_SCHEMES: Record<ColorScheme, ColorScheme> = {
// 	light: lightScheme,
// 	dark: lightScheme, // TODO: Add dark theme when available
// 	'no-preference': lightScheme,
// };
const COLOR_SCHEMES = {
	light: lightScheme,
	dark: lightScheme, // TODO: Add dark theme when available
};

/**
 * Hook that returns the Banana color scheme associated with the active,
 * OS-defined color scheme.
 */
export function useScheme(): ColorScheme {
	const colorScheme = useColorScheme();
	return COLOR_SCHEMES[colorScheme || 'no-preference'];
}
