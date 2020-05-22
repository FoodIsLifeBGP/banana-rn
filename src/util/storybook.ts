import Constants from 'expo-constants';

const getstorybook = () => {
	const { storybook } = Constants.manifest.extra;
	return storybook;
};

export default getstorybook;
