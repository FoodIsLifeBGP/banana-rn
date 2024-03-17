import React, { useState, FunctionComponent } from 'react';
import { View, Text, Linking } from 'react-native';
import { LIGHT_GRAY, NAVY_BLUE } from '@util/constants/colors';
import {
	FormTextInput, LinkButton, SpacerInline, Button,
} from '@elements';
import { ButtonStyle } from '@elements/Button';
import useGlobal from '@state';
import styles from './LoginScreen.styles';

interface ResetRequestFormProps {
	onComplete: () => void;
	onDismiss: () => void;
}

const buttonStyle: ButtonStyle = {
	default: {
		background: LIGHT_GRAY,
		foreground: NAVY_BLUE,
	},
};

const ResetRequestForm: FunctionComponent<ResetRequestFormProps> = ({
	onComplete,
}) => {
	const [ isSubmitting, setIsSubmitting ] = useState(false);
	const [ formData, setFormData ] = useState('');
	const [ error, setError ] = useState('');
	const [ showSuccessMessage, setShowSuccessMessage ] = useState(false);
	const [ , actions ] = useGlobal() as any;
	const { requestResetToken } = actions;

	const isValidEmail = () => {
		if (!formData.includes('@') || !formData.includes('.')) {
			setError('Must be a valid email address.');
			return false;
		}
		return true;
	};

	const requestResetProps = {
		input: formData,
		setIsSubmitting,
		onComplete: () => {
			setShowSuccessMessage(true);
			onComplete();
		},
		setError,
	};

	const handleSubmit = () => {
		if (isValidEmail() && !isSubmitting) {
			setIsSubmitting(true);
			requestResetToken(requestResetProps);
		}
	};

	const openEmailApp = () => {
		Linking.openURL('mailto:');
	};

	return (
		<View>
			{showSuccessMessage ? (
				<>
					<Text style={styles.text}>Check your email for reset instructions.</Text>
					<Button
						buttonStyle={buttonStyle}
						onPress={openEmailApp}
						children={() => <Text style={styles.linkButtonText}>Open Your Email App</Text>}
					/>
				</>
			) : (
				<>
					<SpacerInline height={20} />
					<Text style={styles.text}>
						Valid users will receive password reset instructions via email.
					</Text>
					<SpacerInline height={20} />
					<FormTextInput
						label="email"
						placeholder="info@bananaapp.org"
						value={formData}
						setValue={text => {
							setError('');
							setFormData(text);
						}}
						autoCorrect={false}
						enablesReturnKeyAutomatically={true}
						autoCapitalize="none"
						autoComplete="username"
						textContentType="username"
						keyboardType="email-address"
						returnKeyType="next"
						blurOnSubmit={true}
					/>
					<View style={styles.errorContainer}>
						<Text style={styles.errors}>{error || null}</Text>
					</View>
					<SpacerInline height={20} />
					<View>
						<LinkButton disabled={isSubmitting} text="Submit" onPress={handleSubmit} />
					</View>
				</>
			)}
		</View>
	);
};

export default ResetRequestForm;
