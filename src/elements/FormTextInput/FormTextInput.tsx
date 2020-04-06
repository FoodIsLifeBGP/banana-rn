/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import {
	View,
	TextInput,
	Text,
	StyleProp,
	TextStyle,
	TextInputProps,
} from 'react-native';
import { InputLabel } from '@elements';
import { LIGHT_BLUE } from '@util/colors';
import styles from './FormTextInput.styles';

interface FormTextInputProps extends TextInputProps {
	label: string; // Label for the input.
	value: TextInputProps['value']; // Input value.
	setValue: TextInputProps['onChangeText']; // Callback used with every keystroke within the input.
	inputStyle?: StyleProp<TextStyle>; // Styling to override default input styling.
	error?: boolean; // Whether or not there is an error associated with the given text.
	errorMessage?: string; // User-facing message associated with an error.
}

export default ({
	label,
	value,
	setValue,
	inputStyle,
	error = false,
	errorMessage,
	editable = true,
	...props
}: FormTextInputProps) => (
	<View>
		<InputLabel text={label} />

		<View>
			<TextInput
				value={value}
				onChangeText={setValue}
				style={[
					styles.input,
					inputStyle,
					!editable && styles.disabled,
					error && styles.inputError,
				]}
				editable={editable}
				placeholderTextColor={LIGHT_BLUE}
				{...props}
			/>

			{error && (
				<View style={styles.errorMessage}>
					<Text style={styles.errorMessageText}>{errorMessage}</Text>
				</View>
			)}
		</View>
	</View>
);
