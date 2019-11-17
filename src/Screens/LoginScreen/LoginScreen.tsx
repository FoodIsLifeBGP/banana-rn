import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import login from '../../util/login';
import { Title, LinkButton, SpacerInline } from '../../elements';
import InputLabel from '../../elements/FormTextInput/InputLabel';
import styles from './LoginScreen.styles';
import { useNavigation } from 'react-navigation-hooks';

export default () => {
	const { navigate } = useNavigation();
	const [ email, setEmail ] = useState();
	const [ password, setPassword ] = useState();

	const handleLogin = async () => {
		const responseStatus = await login({ email, password });
		switch(responseStatus) {
			case 202: navigate('DashboardScreen'); break;
			case 401: Alert.alert('Incorrect email or password'); break;
			default: Alert.alert(responseStatus); break;
		}
	}

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
			/>
			<InputLabel text="Password" />
			<TextInput 
				label=""
				value={password}
				onChangeText={text => setPassword(text)}
				style={styles.input}
				underlineColor="white"
				autoCapitalize="none"
			/>
			
			<LinkButton
				text="Log In"
				onPress={() => handleLogin()}
			/>
			<SpacerInline height={40} />
			<LinkButton
				text="Register"
				destination="RegistrationScreen"
			/>
		</View>
	);
};
