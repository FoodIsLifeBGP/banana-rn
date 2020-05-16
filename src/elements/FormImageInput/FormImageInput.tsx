import React, {
	Ref,
	RefObject,
	forwardRef
} from 'react';
import {
	View,
	Image,
	Text,
	StyleProp,
	ViewStyle
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';

import {
	Icon,
	InputLabel
} from '@elements';
import { sourceImage } from '@util/ImageSourcer';
import styles from './FormImageInput.styles';

interface FormImageInputProps {
	/** Label for the input. */
	label: string,

	/** ImageInfo chosen from the image picker. */
	value: ImageInfo | null,

	/** Callback for when an image is chosen from the image picker. */
	setValue: (img: ImageInfo) => void,

	/* Status message of the image upload. */
	status: string,

	/** Optional style of the component */
	style?: StyleProp<ViewStyle>,

	/** Whether or not there is an error associated with the given input value. */
	error?: boolean;

	/** User-facing message associated with an error. */
	errorMessage?: string;
};

/**
 * Input component for a form to select an image from storage to upload.
 */
const FormImageInput = (
	{
		label,
		value,
		setValue,
		status,
		style,
		error = false,
		errorMessage,
	} : FormImageInputProps,
	ref: Ref<TouchableWithoutFeedback>
) => {

	const pickImage = async () => {
		const imageResult = await sourceImage('cameraRoll');
		if (imageResult && !imageResult.cancelled) {
			setValue(imageResult as ImageInfo);
		}
	}

	return (
		<View style={style}>
			<InputLabel text={label} />

			<Text style={styles.statusRowText}>
				<Text style={styles.statusLabelText}>
					{"Status : "}
				</Text>
				{status}
			</Text>

			<TouchableWithoutFeedback
					onPress={pickImage}
					ref={ref}
			>
				{ value?.uri != null
					? <Image
						style={styles.image}
						source={{uri: value.uri}}
					/>
					: <View style={styles.iconContainer}>
						<Icon name="image" size={24} />
					</View>
				}
			</TouchableWithoutFeedback>

			{error && (
				<View style={styles.errorMessage}>
					<Text style={styles.errorMessageText}>
						{errorMessage}
					</Text>
				</View>
			)}
		</View>
	);
}

export default forwardRef<TouchableWithoutFeedback, FormImageInputProps & { ref?: RefObject<TouchableWithoutFeedback> }>(FormImageInput);