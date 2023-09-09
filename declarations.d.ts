/**
 * Adds a type to SVG imports on mobile.
 */
declare module '*.svg' {
	import { SvgProps } from 'react-native-svg';

	const content: React.FC<SvgProps>;
	export default content;
}

/**
 * Adds a type to the '@react-native/metro-config' file
 */

/**
 * Adds a type to SVG imports on mobile.
 */
declare module '@react-native/metro-config';
