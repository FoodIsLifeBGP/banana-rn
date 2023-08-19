const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
/**
 * Configuration file for the React Native bundler, Metro.
*/

const getDefaultExpoConfig = async () => {
	const { resolver: { sourceExts, assetExts } } = await getDefaultConfig(__dirname);

	return {
		transformer: {
			babelTransformerPath: require.resolve('react-native-svg-transformer'),
			assetPlugins: [ 'expo-asset/tools/hashAssetFiles' ],
		},
		resolver: {
			assetExts: assetExts.filter(ext => ext !== 'svg'),
			sourceExts: [ ...sourceExts, 'svg' ],
		},
	};
};

// Merge the default React Native Metro configuration  with the default Expo
module.exports = (async () => {
	const customConfig = await getDefaultExpoConfig();
	return mergeConfig(getDefaultConfig(__dirname), customConfig);
})();
