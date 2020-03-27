/**
 * Standardized typography styling.
 *
 * @packageDocumentation
 */

import { NAVY_BLUE, LIGHT_BLUE } from '@util/colors';

const heading = {
	fontFamily: 'open-sans-bold',
	color: NAVY_BLUE,
	textTransform: 'uppercase',
};

const body = {
	fontFamily: 'open-sans-regular',
	color: NAVY_BLUE,
};

export default {
	h1: {
		...heading,
		fontSize: 40,
	},
	h2: {
		...heading,
		fontSize: 25,
	},
	h3: {
		...heading,
		fontSize: 20,
	},
	h4: {
		...heading,
		fontSize: 16,
	},
	h5: {
		...heading,
		fontSize: 12,
	},
	body1: {
		...body,
		fontSize: 16,
	},
	body2: {
		...body,
		fontSize: 16,
		color: LIGHT_BLUE,
	},
	body3: {
		...body,
		fontSize: 14,
		textTransform: 'uppercase',
	},
	body4: {
		...body,
		fontFamily: 'open-sans-light',
		fontSize: 14,
	},
	body5: {
		...body,
		fontSize: 12,
		textTransform: 'uppercase',
	},
	body6: {
		...body,
		fontFamily: 'open-sans-bold',
		fontSize: 12,
		textTransform: 'uppercase',
	},
};
