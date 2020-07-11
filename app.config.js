export default ({ config }) => ({
	...config,
	extra: {
		...config.extra,
		ipAddress: process.env.IP_ADDRESS,
	},
});
