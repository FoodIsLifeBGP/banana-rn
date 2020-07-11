export default ({ config }) => ({
	...config,
	extra: {
		variant: process.env.APP_VARIANT ? process.env.APP_VARIANT : 'donor',
		storybook: false,
		ipAddress: process.env.IP_ADDRESS,
	},
});
