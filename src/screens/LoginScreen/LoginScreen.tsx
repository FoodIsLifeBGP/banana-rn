import React, {
	useState, RefObject, createRef, useEffect,
} from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import {
	ScrollView,
	View,
	Alert,
	Text,
	TextInput,
	KeyboardAvoidingView,
	AsyncStorage,
	Platform,
} from 'react-native';
import useGlobal from '@state';
import {
	Title,
	LinkButton,
	FormTextInput,
} from '@elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './LoginScreen.styles';
import ResetPassword from './ResetPassword';
import { PasswordResetStage } from './ResetPassword/ResetPassword';


export default () => {
	const { navigate } = useNavigation();
	const [ state, actions ] = useGlobal() as any;
	const { userIdentity } = state;
	const { logIn } = actions;
	const passwordInputRef: RefObject<TextInput> = createRef();
	const [ email, setEmail ] = useState(useNavigationParam('email') ?? '');
	const [ password, setPassword ] = useState(useNavigationParam('password') ?? '');
	const clearEmailAndPassword = () => { setEmail(''); setPassword(''); };
	const handleEmailInputSubmit = () => passwordInputRef.current?.focus();
	const [ showModal, setShowModal ] = useState(false);
	const [ passwordResetStage, setPasswordResetStage ] = useState<PasswordResetStage | undefined>(undefined);

	useEffect(() => {
		const retrievePasswordResetStage = async () => {
			try {
				const value = await AsyncStorage.getItem('PASSWORD RESET STAGE') as PasswordResetStage;
				if (value === PasswordResetStage.VERIFY) {
					setPasswordResetStage(value);
				}
			} catch (error) {
				// Not important error
			}
		};
		retrievePasswordResetStage();
	}, []);

	const storePasswordResetStage = async (newStage: PasswordResetStage) => {
		try {
			await AsyncStorage.setItem('PASSWORD RESET STAGE', newStage);
			setPasswordResetStage(newStage);
		} catch (error) {
			// Not important error
		}
	};

	const clearPasswordResetStage = () => {
		setPasswordResetStage(undefined);
		AsyncStorage.removeItem('PASSWORD RESET STAGE');
	};

	const handleLogin = async () => {
		const statusCode = await logIn({ email, password });
		switch (statusCode) {
			case 202: {
				await clearEmailAndPassword();
				clearPasswordResetStage();
				navigate('LoginSuccessScreen');
				return;
			}
			case 401: Alert.alert('Incorrect email or password'); return;
			case 404: Alert.alert('Server not found - please try again'); return;
			case 500: Alert.alert('Network error - please try again'); return;
			default: Alert.alert(`Server replied with ${statusCode} status code`);
		}
	};

	const handleForgotPassword = () => {
		setShowModal(true);
	};
	const handleDismissModal = () => {
		setShowModal(false);
	};

	return (
		<KeyboardAvoidingView style={styles.outerContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
					<LinkButton text="Register" destination="RegistrationScreen" />
				</View>
			</ScrollView>
			{showModal && (
				<ResetPassword
					onSuccess={clearPasswordResetStage}
					onDismiss={handleDismissModal}
					initialStage={passwordResetStage}
					onRequest={storePasswordResetStage}
					onBack={clearPasswordResetStage}
				/>
			)}
		</KeyboardAvoidingView>
	);
};
