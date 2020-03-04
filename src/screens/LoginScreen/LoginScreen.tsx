import React, { useState } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import { View, Alert, TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import useGlobal from '@state';
import {
	Title,
	LinkButton,
	SpacerInline,
	InputLabel,
	Icon,
} from '@elements';
import styles from './LoginScreen.styles';

export default () => {
	const { navigate } = useNavigation();
	const [ state, actions ] = useGlobal() as any;
	const { userIdentity } = state;
	const { logIn } = actions;

	const defaultEmail = 'client@client.com';
	const defaultPassword = 'client';
	const [ email, setEmail ] = useState(useNavigationParam('email') ?? '');
	const [ password, setPassword ] = useState(useNavigationParam('password') ?? '');
	const [ hidePwd, setHidePwd ] = useState(true);

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
			<SpacerInline height={140} />
			<Title text={`I am a ${userIdentity}.`} />
			<SpacerInline height={40} />
			<InputLabel text="Email Address" />
			<TextInput
				value={email}
				onChangeText={setEmail}
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				autoFocus={true}
				blurOnSubmit={false}
				placeholder = 'example@thebgp.com'
				placeholderTextColor = {styles.placeholderEmail}
			/>
			<InputLabel text="Password" />
			<View style={styles.passwordContainer}>
				<View style={{ flex: 8 }}>
					<TextInput
						textContentType="password"
						value={password}
						secureTextEntry={hidePwd}
						onChangeText={setPassword}
						style={styles.input}
						autoCapitalize="none"
						autoCorrect={false}
						placeholder = '********'
					/>
				</View>
				<View style={styles.iconContainer}>
					<TouchableWithoutFeedback
						onPress={() => setHidePwd(!hidePwd)}
					>
						<Icon name={hidePwd ? 'lock' : 'unlock'} style={styles.hideIcon} />
					</TouchableWithoutFeedback>
				</View>
			</View>
			<SpacerInline height={40} />
			<LinkButton text="Log In" onPress={() => handleLogin()} />
			<SpacerInline height={10} />
			<LinkButton text="Register" destination="RegistrationScreen" />
		</View>
	);
};
