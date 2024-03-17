import React, {
	useState, RefObject, createRef, useEffect,
} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
	ScrollView,
	View,
	Alert,
	Text,
	TextInput,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';

import useGlobal from '@state';
import {
	Title, LinkButton, FormTextInput, Button,
} from '@elements';
import { ButtonStyle } from '@elements/Button';
import { LIGHT_GRAY, NAVY_BLUE } from '@util/constants/colors';
import ButtonStyles from '@elements/Button/Button.styles';
import styles from './LoginScreen.styles';
import ResetForm from './ResetRequestForm';

type LoginFormFields = { email?: string; password?: string };

const buttonStyle: ButtonStyle = {
	default: {
		background: LIGHT_GRAY,
		foreground: NAVY_BLUE,
	},
};

export default function ({ navigation, route }) {
	const [ { userIdentity }, { logIn } ] = useGlobal() as any;

	const passwordInputRef: RefObject<TextInput> = createRef();
	const {
		email: initialEmail = '',
		password: initialPassword = '',
	}: LoginFormFields = route.params ?? {};

	const [ email, setEmail ] = useState(initialEmail);
	const [ password, setPassword ] = useState(initialPassword);
	const [ showModal, setShowModal ] = useState(false);

	const clearEmailAndPassword = () => {
		setEmail('');
		setPassword('');
	};
	const handleEmailInputSubmit = () => passwordInputRef.current?.focus();


	const handleLogin = async () => {
		const statusCode = await logIn({ email, password });
		switch (statusCode) {
			case 202: {
				await clearEmailAndPassword();
				// TODO: is this how we navigate?
				navigation.navigate('Drawer', { screen: 'LoginSuccessScreen' });
				return;
			}
			case 401:
				Alert.alert('Incorrect email or password');
				return;
			case 404:
				Alert.alert('Server not found - please try again');
				return;
			case 500:
				Alert.alert('Network error - please try again');
				return;
			default:
				Alert.alert(`Server replied with ${statusCode} status code`);
		}
	};

	const handleForgotPassword = () => {
		setShowModal(true);
	};

	const handleDismissModal = () => {
		setShowModal(false);
	};

	const handleResetRequest = () => {
		alert('TODO: handle passowrd reset request!');
	};

	return (
		<KeyboardAvoidingView
			style={styles.outerContainer}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<View style={styles.header}>
				{/* TODO: use ContentHeader component when available */}
				<Title text={`banana \n${userIdentity}`} />
			</View>

			<ScrollView
				style={styles.bodyContainer}
				contentContainerStyle={styles.bodyContentContainer}
			>
				<View style={styles.form}>
					<FormTextInput
						label="email"
						placeholder="info@bananaapp.org"
						value={email}
						setValue={setEmail}
						style={styles.inputEmail}
						onSubmitEditing={handleEmailInputSubmit}
						autoCorrect={false}
						enablesReturnKeyAutomatically={true}
						autoCapitalize="none"
						autoComplete="username"
						textContentType="username"
						keyboardType="email-address"
						returnKeyType="next"
						blurOnSubmit={true} // Necessary to prevent focus from 'flickering'
					/>

					<FormTextInput
						label="password"
						type="password"
						value={password}
						setValue={setPassword}
						ref={passwordInputRef}
						onSubmitEditing={handleLogin}
						enablesReturnKeyAutomatically={true}
						autoComplete="password"
						returnKeyType="go"
						blurOnSubmit={false}
					/>

					<View style={styles.forgotPassword}>
						{/* View wrapper required to constrain clickable area of button */}
						<Button
							buttonStyle={buttonStyle}
							onPress={handleForgotPassword}
							children={() => (
								<Text style={styles.forgotPasswordText}>Forgot Password? </Text>
							)}
						/>
					</View>
				</View>

				<View style={styles.buttonContainer}>
					<LinkButton text="Log In" onPress={handleLogin} />
					<LinkButton
						text="Register"
						onPress={() => navigation.navigate('Register')}
					/>
				</View>
			</ScrollView>
			{showModal && (
				<ResetForm
					onDismiss={handleDismissModal}
					onComplete={handleResetRequest}
				/>
			)}
		</KeyboardAvoidingView>
	);
}
