/* eslint-disable react/jsx-props-no-spreading */

import React, {
	forwardRef, RefObject, Ref, useState,
} from 'react';
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
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './FormTextInput.styles';

interface BasicTextInputProps extends TextInputProps {
	value: TextInputProps['value']; // Input value.
	setValue: TextInputProps['onChangeText']; // Callback used with every keystroke within the input.
	inputStyle?: StyleProp<TextStyle>; // Styling to override default input styling.
	ref: Ref<TextInput>;
}

interface FormTextInputProps extends BasicTextInputProps {
	type?: 'default' | 'password'; // Type of prebuilt text inputs.
	label: string;
	inputStyle?: StyleProp<TextStyle>; // Styling to override default input styling.
	error?: boolean; // Whether or not there is an error associated with the given text.
	errorMessage?: string; // User-facing message associated with an error.
}

/**
 * Most basic text input that is used across application.
 */
const BasicTextInput = ({
	style,
	value,
	setValue,
	inputStyle,
	ref,
	editable = true,
	...props
}: BasicTextInputProps) => (
	<TextInput
		ref={ref}
		value={value}
		onChangeText={setValue}
		style={[
			styles.input,
			style,
			inputStyle, // Prop passed to this component to ensure it can override default styling.
			!editable && styles.disabled,
		]}
		editable={editable}
		placeholderTextColor={LIGHT_BLUE}
		{...props}
	/>
);

/**
 * Input for a password with input visibility that can be toggled.
 * Properties are 'transparent' and all are passed to the BasicTextInput.
 */
const PasswordInput = (
	props: BasicTextInputProps,
) => {
	const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);

	return (
		<View>
			<BasicTextInput
				{...props}

				secureTextEntry={true}
				autoCorrect={false}
				textContentType="password"
			/>

			<View style={styles.passwordVisibilityIcon}>
				<TouchableWithoutFeedback
					onPress={() => setIsPasswordVisible(!isPasswordVisible)}
				>
					<View style={styles.passwordIconContainer}>
						{/*
						Uncomment when Icon SVG is available and delete pink View placeholder

						<Icon
							name={isPasswordVisible ? 'eyeOff' : 'eyeOn'}
							size={24}
						/>
						*/}
						<View style={{ width: 24, height: 24, backgroundColor: isPasswordVisible ? 'blue' : 'pink' }} />
					</View>
				</TouchableWithoutFeedback>
			</View>
		</View>
	);
};

/**
 * Input component for a form that includes a standardized label and text input.
 * Can render a field with an optional visible password if 'type' password is given.
 */
const FormTextInput = ({
	type = 'default',
	label,
	value,
	setValue,
	error = false,
	errorMessage,
	style,
	inputStyle,
	...props
}: FormTextInputProps, ref: Ref<TextInput>) => {
	const Input = type === 'password'
		? PasswordInput
		: BasicTextInput;

	return (
		<View style={style}>
			<InputLabel text={label} />

			<View>
				<Input
					style={error && styles.inputError}
					ref={ref}
					value={value}
					setValue={setValue}
					inputStyle={inputStyle}
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
};

/**
 * Allows the Higher-Order-Component (FormTextInput) to pass references to the native TextInput.
 */
export default forwardRef<TextInput, FormTextInputProps & { ref?: RefObject<TextInput> }>(FormTextInput);

