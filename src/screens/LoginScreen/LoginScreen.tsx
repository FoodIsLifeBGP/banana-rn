import React, { useState, RefObject, createRef } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import {
	ScrollView,
	View,
	Alert,
	Text,
	TextInput,
	KeyboardAvoidingView,
} from 'react-native';
import useGlobal from '@state';
import {
	Title,
	LinkButton,
	FormTextInput,
} from '@elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './LoginScreen.styles';

export default () => {
	const { navigate } = useNavigation();
	const [ state, actions ] = useGlobal() as any;
	const { userIdentity } = state;
	const { logIn } = actions;

	const passwordInputRef: RefObject<TextInput> = createRef();

	const [ email, setEmail ] = useState(useNavigationParam('email') ?? '');
	const [ password, setPassword ] = useState(useNavigationParam('password') ?? '');
	const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);

	const clearEmailAndPassword = () => { setEmail(''); setPassword(''); };

	const handleEmailInputSubmit = () => passwordInputRef.current?.focus();

	const handleLogin = async () => {
		const statusCode = await logIn({ email, password });
		switch (statusCode) {
			case 202: {
				await clearEmailAndPassword();
				navigate('LoginSuccessScreen');
				return;
			}
			case 401: Alert.alert('Incorrect email or password'); return;
			case 404: Alert.alert('Server not found - please try again'); return;
			case 500: Alert.alert('Network error - please try again'); return;
			default: Alert.alert(`Server replied with ${statusCode} status code`);
		}
	};

	const handleForgotPassword = () => { console.log('Handle forgot password.'); };

	return (
		<KeyboardAvoidingView style={styles.outerContainer} behavior="padding">
			<View style={styles.header}>
				{/* TODO: use ContentHeader component when available */}
				<Title text={`banana \n${userIdentity}`} />
			</View>

			<ScrollView style={styles.bodyContainer} contentContainerStyle={styles.bodyContentContainer}>
				<View
					style={styles.form}
				>
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
						autoCompleteType="username"
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
						autoCompleteType="password"
						returnKeyType="go"
						blurOnSubmit={false}
					/>

					<View style={styles.forgotPassword}>
						{/* View wrapper required to constrain clickable area of button */}
						<TouchableWithoutFeedback
							onPress={handleForgotPassword}
						>
							<Text style={styles.forgotPasswordText}>
								Forgot Password?
							</Text>
						</TouchableWithoutFeedback>
					</View>
				</View>

				<View style={styles.buttonContainer}>
					<LinkButton text="Log In" onPress={handleLogin} />
					<LinkButton text="Register" textColor="DARK_GRAY" destination="RegistrationScreen" />
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
