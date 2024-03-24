import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

// Creates a type that is a subset (U) of the set (T).
type Extends<T, U extends T> = U;
export type ImageSourcingMethod = Extends<
Permissions.PermissionType,
'camera' | 'cameraRoll'
>;

// Configuration for an image sourcing method.
interface ImageSourcingConfig {
  permissions: Array<Permissions.PermissionType>; // Device permissions required for an image source.
  // eslint-disable-next-line @typescript-eslint/ban-types
  launchImageSourcingMethod: Function; // Native launcher for the image source.
}

// The possible methods of retrieving an image from the device mapped to their unique configs.
/* ?? TODO: If request for camera roll is too annoying, only request on required devices (iOS 10 & Android). */
const IMAGE_SOURCE_METHODS: Record<
ImageSourcingMethod,
ImageSourcingConfig
> = {
  camera: {
    permissions: [ 'camera', 'cameraRoll' ],
    launchImageSourcingMethod: ImagePicker.launchCameraAsync,
  },
  cameraRoll: {
    permissions: [ 'cameraRoll' ],
    launchImageSourcingMethod: ImagePicker.launchImageLibraryAsync,
  },
};

// Generic options for images, no matter the image source.
const IMAGE_OPTIONS: ImagePicker.ImagePickerOptions = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [ 16, 9 ],
  quality: 1,
};

/**
 * Launches the image sourcing method dependent on the given image source type.
 * If the user doesn't grant device permissions or the device fails to retrieve an image,
 * something will happen. :)
 *
 * @param imageSource - The method of sourcing the image.
 * @returns The user-selected image result, if successful.
 */
export async function sourceImage(imageSource: Permissions.PermissionType): Promise<ImagePicker.ImagePickerResult | null> {
  let pickedImage = {} as ImagePicker.ImagePickerResult; // The user selected image.

  /**
   * Requests device access permissions from the user and launches the method of image acquisition.
   *
   * @param {ImageSourcingConfig} Configuration for a specific method of image acquisition.
   * @throws When access permission is denied or when an error occurs during the request.
   */
  const getImageFromSource = async ({
    permissions,
    launchImageSourcingMethod,
  }: ImageSourcingConfig): Promise<ImagePicker.ImagePickerResult> => {
    const permissionResponses = await Permissions.askAsync(...permissions);

    // Any unsuccessful permissions status will propogate to this 'status' property.
    if (permissionResponses.status !== 'granted') {
      throw new Error('Permission(s) not granted.');
    }

    return launchImageSourcingMethod(IMAGE_OPTIONS);
  };

  try {
    pickedImage = await getImageFromSource(IMAGE_SOURCE_METHODS[imageSource]);
    // TODO: add proper type for error
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err.message);
    // TODO: display alert with error message
  }

  return pickedImage?.canceled ? null : pickedImage;
}
