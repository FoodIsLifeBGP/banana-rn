export const SCAN_QR_CODE = 'Scan QR Code';
export const MY_DONATIONS = 'My Donations';
export const LOG_OUT = 'Log Out';

/**
	 * Converts camel case to upper skewer case.
	 * @param text
	 */
export const camelToUpperSkewer = (text: string): string => text.replace(/([A-Z])/g, '-$1').toUpperCase();
