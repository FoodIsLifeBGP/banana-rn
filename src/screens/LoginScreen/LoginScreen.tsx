import React, { useState } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import { View, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import login from '@util/login';
import { Title, LinkButton, SpacerInline } from '@elements';
import InputLabel from '../../elements/FormTextInput/InputLabel';
import Icon from '../../elements/Icon';
import styles from './LoginScreen.styles';

export default () => {
	const { navigate } = useNavigation();
	const [ email, setEmail ] = useState(useNavigationParam('email') || '');
	const [ password, setPassword ] = useState(useNavigationParam('password') || '');
	const [ hidePwd, setHidePwd ] = useState(true);
	const handleLogin = async () => {
		const statusCode = await login({ email, password });
		switch (statusCode) {
			case 202: navigate('LoginSuccessScreen'); break;
			case 401: Alert.alert('Incorrect email or password'); break;
			case 500: Alert.alert('Network error - please try again'); break;
			default: Alert.alert(statusCode);
		}
	};

	return (
		<View style={styles.outerContainer}>
			<SpacerInline height={140} />
			<Title text="I am a donor." />
			<SpacerInline height={40} />
			<InputLabel text="Email Address" />
			<TextInput
				label=""
				value={email}
				onChangeText={text => setEmail(text)}
				style={styles.input}
				underlineColor="white"
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<InputLabel text="Password" />
			<View style={styles.passwordContainer}>
				<View style={{ flex: 8 }}>
					<TextInput
						label=""
						textContentType="password"
						value={password}
						secureTextEntry={hidePwd}
						onChangeText={text => setPassword(text)}
						style={styles.input}
						underlineColor="gray"
						autoCapitalize="none"
						autoCorrect={false}
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
