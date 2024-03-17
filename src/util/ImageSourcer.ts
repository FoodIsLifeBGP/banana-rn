import * as ImagePicker from 'expo-image-picker';

export type ImageSourcingMethod = 'camera' | 'cameraRoll';

interface ImageSourcingConfig {
	launchImageSourcingMethod: () => Promise<ImagePicker.ImagePickerResult>; // native launcher for the image source.
}

// generic options for images, no matter the image source.
const IMAGE_OPTIONS: ImagePicker.ImagePickerOptions = {
	mediaTypes: ImagePicker.MediaTypeOptions.Images,
	allowsEditing: true,
	aspect: [ 16, 9 ],
	quality: 1,
};

const IMAGE_SOURCE_METHODS: Record<ImageSourcingMethod, ImageSourcingConfig> = {
	camera: {
		launchImageSourcingMethod: () => ImagePicker.launchCameraAsync(IMAGE_OPTIONS),
	},
	cameraRoll: {
		launchImageSourcingMethod: () => ImagePicker.launchImageLibraryAsync(IMAGE_OPTIONS),
	},
};

/**
 * Launches the image sourcing method dependent on the given image source type.
 * If the user doesn't grant device permissions or the device fails to retrieve an image,
 * something will happen. :)
 *
 * @param imageSource - The method of sourcing the image.
 * @returns The user-selected image result, if successful.
 */
export async function sourceImage(imageSource: ImageSourcingMethod): Promise<ImagePicker.ImagePickerResult | null> {
	let pickedImage = {} as ImagePicker.ImagePickerResult; // The user selected image.

	try {
		// Check and request the necessary permissions before launching the image source method.
		if (imageSource === 'camera') {
			const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
			if (cameraPermission.status !== 'granted') {
				throw new Error('Camera permission not granted.');
			}
		} else if (imageSource === 'cameraRoll') {
			const cameraRollPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
			if (cameraRollPermission.status !== 'granted') {
				throw new Error('Camera roll permission not granted.');
			}
		}

		pickedImage = await IMAGE_SOURCE_METHODS[imageSource].launchImageSourcingMethod();
	} catch (err: unknown) {
		console.error((err as Error).message);
		// TODO: display alert with error message
		return null;
	}

	return pickedImage?.canceled ? null : pickedImage;
}
