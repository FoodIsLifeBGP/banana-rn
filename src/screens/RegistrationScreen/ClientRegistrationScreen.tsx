/* eslint-disable no-tabs */
import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import {
	ScrollView,
	View,
	Text,
	Alert,
	TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Checkbox, Divider } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import useGlobal from '@state';
import * as colors from '@util/colors';
import {
	Title,
	LinkButton,
	FormTextInput,
	SpacerInline,
	NavBar,
	Icon,
	InputLabel,
} from '@elements';
import styles from './RegistrationScreen.styles';

export default () => {
	const { navigate, goBack } = useNavigation();
	const [ _state, actions ] = useGlobal() as any;
	const { register } = actions;

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ retypedPassword, setRetypedPassword ] = useState('');
	const [ termsOfService, setTermsOfService ] = useState(false);
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');

	const toggleTermsOfService = () => {
		setTermsOfService(!termsOfService);
	};

	// object contains the error status and corresponding message
	// modifications in errorObj trigger change in UI.
	const errorObj = {
		email: {
			isTrue: false,
			message: 'Unknown error occurred',
		},
		password: {
			isTrue: false,
			message: 'Unknown error occurred',
		},
		retypedPassword: {
			isTrue: false,
			message: 'Unknown error occurred',
		},
		firstName: {
			isTrue: false,
			message: 'Unknown error occurred',
		},
		lastName: {
			isTrue: false,
			message: 'Unknown error occurred',
		},
	};


	const validateAndSubmit = async () => {
		// outdated code, commented for future reference
		// if (!email.includes('@') || !email.includes('.')) { Alert.alert('Please enter a valid email address.'); return; }
		// if (password.length < 8) { Alert.alert('Please enter a password at least 8 characters long.'); return; }
		// if (!street || street.split(' ').length < 3) { Alert.alert('Please enter your street number and name.'); return; }
		// if (!city) { Alert.alert('Please enter your city.'); return; }
		// if (!(/^\d{5}$/.test(zip))) { Alert.alert('Please enter a valid 5-digit zip code.'); return; }
		// if (!transportationMethod) { Alert.alert('Please select your preferred method of transportation.'); return; }
		// if (!termsOfService) { Alert.alert('Please read and accept the terms of service to complete your registration.'); return; }
		//
		// const statusCode = await register({
		// email, password, street, city, state, zip, transportationMethod, ethnicity, gender,
		// });
		// switch (statusCode) {
		// 	case (201 || 202): Alert.alert('Registration complete! Please log in to continue.'); navigate('LoginScreen', { email, password }); return;
		// 	case 406: Alert.alert('Error: not accepted'); return;
		// 	case 500: Alert.alert('Internal server error, please try again later.'); return;
		// 	default: Alert.alert("Sorry, that didn't work, please try again later."); console.log(statusCode);
		// }
	};

	return (
		<KeyboardAvoidingView
			style={styles.keyboardAvoidContainer}
			behavior="padding"
			enabled={true}
			keyboardVerticalOffset={100}

		>
			<View style={styles.header}>
				<Title text="Registration" />
			</View>
			<ScrollView style={styles.scrollContainer}>

				<FormTextInput
					label="Email"
					value={email}
					setValue={setEmail}
					style={styles.input}
					placeholder="info@bannaapp.org"
					error={errorObj.email.isTrue}
					errorMessage={errorObj.email.message}
				/>

				<FormTextInput
					label="Password"
					value={password}
					setValue={setPassword}
					type="password"
					style={styles.input}
					error={errorObj.password.isTrue}
					errorMessage={errorObj.password.message}
				/>


				<FormTextInput
					label="Confirm Password"
					value={retypedPassword}
					setValue={setRetypedPassword}
					style={styles.input}
					type="password"
					error={errorObj.retypedPassword.isTrue}
					errorMessage={errorObj.retypedPassword.message}
				/>

				<FormTextInput
					label="First Name"
					value={firstName}
					setValue={setFirstName}
					style={styles.input}
					error={errorObj.firstName.isTrue}
					errorMessage={errorObj.firstName.message}
				/>


				<FormTextInput
					label="Last Name"
					value={lastName}
					setValue={setLastName}
					style={styles.input}
					error={errorObj.lastName.isTrue}
					errorMessage={errorObj.lastName.message}

				/>


				<View style={styles.checkboxRow}>
					<View style={styles.checkBox}>
						<TouchableOpacity style={{ top: 3 }} onPress={toggleTermsOfService}>
							<Icon
								name={termsOfService ? 'checkboxOn' : 'checkboxOff'}
								size={24}
								color="none"
							/>
						</TouchableOpacity>
					</View>
					<SpacerInline width={10} />
					<Text
						style={styles.text}
						onPress={toggleTermsOfService}

					>
						{'I agree to the '}
					</Text>
					<View>
						<TouchableOpacity onPress={() => (navigate('TermsScreen'))}>
							<Text style={[ styles.text, styles.textBold ]}>Terms & Conditions</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={[ styles.row, { paddingHorizontal: '10%' } ]}>
					<LinkButton
						text="back"
						onPress={() => goBack()}
					/>
					<LinkButton
						text="Register"
						onPress={() => alert('wait for data side implementation')}
					/>
				</View>
				<SpacerInline height={50} />
				<View style={{ flex: 1 }} />
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
