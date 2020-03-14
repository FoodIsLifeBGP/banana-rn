import React, { useState } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import {
	View,
	Alert,
	TextInput,
	Text,
} from 'react-native';
import useGlobal from '@state';
import {
	Title,
	LinkButton,
	SpacerInline,
	InputLabel,
} from '@elements';
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

	return (
		<View style={styles.outerContainer}>
			<View style={styles.banner}>
				<Title text={`banana ${userIdentity}`} />
			</View>
			<View style={styles.innerContainer}>
				<SpacerInline height={60} />
				<InputLabel text="Email" />
				<TextInput
					value={email}
					onChangeText={setEmail}
					style={styles.input}
					autoCapitalize="none"
					autoCorrect={false}
					autoFocus={true}
					blurOnSubmit={false}
				/>
				<InputLabel text="Password" />
				<View style={styles.passwordContainer}>
					<View style={{ flex: 8 }}>
						<TextInput
							textContentType="password"
							value={password}
							secureTextEntry={true}
							onChangeText={setPassword}
							style={styles.input}
							autoCapitalize="none"
							autoCorrect={false}
						/>
					</View>
				</View>
				<Text style={styles.link}>Forgot Password?</Text>
				<SpacerInline height={200} />
				<View style={styles.buttonContainer}>
					<LinkButton text="Log In" onPress={() => handleLogin()} />
					<LinkButton text="Register" destination="RegistrationScreen" />
				</View>
			</View>
		</View>
	);
};
