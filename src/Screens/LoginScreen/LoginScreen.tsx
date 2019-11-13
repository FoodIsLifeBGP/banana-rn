import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Title, InputLabel, LinkButton } from '../../Elements';
import styles from './LoginScreen.styles';

export default () => {
	const [ email, setEmail ] = useState();
	const [ password, setPassword ] = useState();

	return (
		<View style={styles.outerContainer}>
			<View style={{ height: 140 }} />
			<Title text="I am a donor." />
			<View style={{ height: 40 }} />

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
				destination="DashboardScreen"
			/>
			<View style={{ height: 40 }} />
			<LinkButton
				text="Create New Account"
				destination="RegistrationScreen"
			/>
		</View>
	);
};

