export default ({ config }) => ({
	...config,
	extra: {
		ipAddress: process.env.IP_ADDRESS,
		variant: process.env.APP_VARIANT ? process.env.APP_VARIANT : 'donor',
		storybook: process.env.STORYBOOK ? process.env.STORYBOOK === 'true' : false,
	},
});
