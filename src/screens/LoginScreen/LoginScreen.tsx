import React, { useState } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import {
	View,
	Alert,
	Text,
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

	const [ email, setEmail ] = useState(useNavigationParam('email') ?? '');
	const [ password, setPassword ] = useState(useNavigationParam('password') ?? '');

	const clearEmailAndPassword = () => { setEmail(''); setPassword(''); };

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
		// Should the root be a ScrollView? Or is the wrapper around this screen already scrollable?
		<View style={styles.outerContainer}>
			<View style={styles.banner}>
				{/* TODO: this should be a component that is also used in info screens */}
				<Title text={`banana \n${userIdentity}`} />
			</View>

			<View style={styles.bodyContainer}>
				<View style={styles.form}>
					<FormTextInput
						label="email"
						value={email}
						setValue={setEmail}
						style={styles.inputEmail}
						placeholder="info@bananaapp.org"
						autoCorrect={false}
						autoFocus={true}
						autoCompleteType="email"
						textContentType="username"
						enablesReturnKeyAutomatically={true}
						keyboardType="email-address"
						returnKeyType="next"
						// blurOnSubmit={false} TODO: true? to trigger callback to move focus to password field
					/>

					<FormTextInput
						label="password"
						value={password}
						setValue={setPassword}
						secureTextEntry={true}
						autoCorrect={false}
						autoCompleteType="password"
						textContentType="password"
						enablesReturnKeyAutomatically={true}
						returnKeyType="go"
						// blurOnSubmit={false} TODO: this prolly should be true? to move focus to password field
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
					<LinkButton text="Log In" onPress={() => handleLogin()} />
					<LinkButton text="Register" destination="RegistrationScreen" />
				</View>
			</View>
		</View>
	);
};
