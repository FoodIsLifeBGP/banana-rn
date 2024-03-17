// import React, { useState, FunctionComponent } from 'react';
// import { View, Text } from 'react-native';
// import { ResetForm, NewPasswordForm } from './Forms';
// import styles from './ResetPassword.styles';

// interface ResetPasswordProps {
//   onSuccess: () => void;
//   onDismiss: () => void;
//   initialStage?: PasswordResetStage;
//   onRequest: (value: PasswordResetStage) => void;
//   onBack: () => void;
// }

// export const ResetPassword: FunctionComponent<ResetPasswordProps> = ({
//   onDismiss, initialStage, onSuccess,
// }) => {
//   const [token, setToken] = useState('');

//   return (
//     <View style={styles.centeredView}>
//       {stage === PasswordResetStage.REQUEST_LINK && (
//         <ResetForm onComplete={handleComplete} />
//       )}
//       {stage === PasswordResetStage.RESET && (
//         <NewPasswordForm onComplete={handleComplete} token={token} />
//       )}
//       {stage === PasswordResetStage.SUCCESS && (
//         <Text style={styles.successText}>Your password has been successfully reset. Please login.</Text>
//       )}
//     </View>
//   );
// };

import React, {
	useState, RefObject, createRef, FunctionComponent,
} from 'react';
import {
	View, Text, TextInput,
} from 'react-native';
import { FormTextInput, LinkButton, SpacerInline } from '@elements';
import useGlobal from '@state';
import styles from './PasswordResetScreen.styles';

interface PasswordResetScreenProps {
	onComplete: () => void;
	token: string;
}

export default function ({ onComplete, token }: PasswordResetScreenProps) {
	const [ isSubmitting, setIsSubmitting ] = useState(false);
	const [ formData, setFormData ] = useState({
		password: '',
		confirmPassword: '',
	});
	const [ error, setError ] = useState('');
	const passwordInputRef: RefObject<TextInput> = createRef();
	const [ , actions ] = useGlobal() as any;
	const { submitNewPassword } = actions;

	const isPasswordValid = () => {
		if (formData.password !== formData.confirmPassword) {
			setError('Passwords do not match.');
			return false;
		}
		if (formData.password.length < 8) {
			setError('Password must be at least 8 characters.');
			return false;
		}
		return true;
	};

	const submitPasswordProps = {
		input: formData.password, token, setIsSubmitting, onComplete, setError,
	};

	const handleSubmit = () => {
		if (isPasswordValid() && !isSubmitting) {
			setError('');
			setIsSubmitting(true);
			submitNewPassword(submitPasswordProps);
		}
	};

	return (
		<View>
			<SpacerInline height={20} />
			<Text style={styles.text}>
				Enter a new password:
			</Text>
			<Text style={styles.smallText}>(at least 8 characters)</Text>
			<SpacerInline height={20} />
			<FormTextInput
				label="Password"
				type="password"
				value={formData.password}
				setValue={text => {
					setError('');
					setFormData({ ...formData, password: text });
				}}
				ref={passwordInputRef}
				autoComplete="password"
				blurOnSubmit={false}
			/>
			<SpacerInline height={20} />
			<FormTextInput
				label="Confirm Password"
				type="password"
				value={formData.confirmPassword}
				setValue={text => {
					setError('');
					setFormData({ ...formData, confirmPassword: text });
				}}
				ref={passwordInputRef}
				autoComplete="password"
				blurOnSubmit={false}
			/>
			<Text style={styles.errors}>{error || null}</Text>
			<SpacerInline height={20} />
			<View>
				<LinkButton disabled={isSubmitting} text="Reset Password" onPress={handleSubmit} />
			</View>
		</View>
	);
}
