/* eslint-disable no-tabs */
import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import {
	Alert, KeyboardAvoidingView,
	ScrollView,
	Text, TouchableOpacity,
	View,
} from 'react-native';
import { Checkbox, Divider } from 'react-native-paper';
import {
	FormTextInput,
	FormImageInput,
	NavBar,
	LinkButton,
	SpacerInline,
	Title, Icon,
} from '@elements';
import useGlobal from '@state';
import * as colors from '@util/colors';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';
import { getStateList } from '@util/statesAbbr';
import styles from './RegistrationScreen.styles';

export default () => {
	const { navigate, goBack } = useNavigation();
	const [ _state, actions ] = useGlobal() as any;
	const { register } = actions;

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ retypedPassword, setRetypedPassword ] = useState('');
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ businessName, setBusinessName ] = useState('');
	const [ address, setAddress ] = useState('');
	const [ city, setCity ] = useState('');
	const [ state, setState ] = useState('WA');
	const [ zip, setZip ] = useState('');
	const [ instructions, setInstructions ] = useState('');
	const [ termsOfService, setTermsOfService ] = useState(false);
	const stateList = getStateList();

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
		businessName: {
			isTrue: false,
			message: 'Unknown error occurred',
		},
		address: {
			isTrue: false,
			message: 'Unknown error occurred',
		},
		city: {
			isTrue: false,
			message: 'Unknown error occurred',
		},
		state: {
			isTrue: false,
			message: 'Unknown error occurred',
		},
		zip: {
			isTrue: false,
			message: 'Unknown error occurred',
		},
		instructions: {
			isTrue: false,
			message: 'Unknown error occurred',
		},
		termsOfService: {
			isTrue: false,
			message: 'Unknown error occurred',
		},


	};

	const toggleTermsOfService = () => setTermsOfService(!termsOfService);

	const validateAndSubmit = async () => {
		// outdated files, commented for future reference.
		// if (organizationName === '') {
		// 	Alert.alert("Please add your organization's name.");
		// eslint-disable-next-line no-tabs
		// 	return;
		// }
		// if (!email.includes('@') || !email.includes('.')) {
		// 	Alert.alert('Please enter a valid email address.');
		// 	return;
		// }
		// if (password.length < 8) {
		// 	Alert.alert('Please enter a password at least 8 characters long.');
		// 	return;
		// }
		// if (license.length !== 9) {
		// 	Alert.alert('Please enter your 9-digit UBI with no spaces or dashes.');
		// 	return;
		// }
		// if (!image) {
		// 	Alert.alert('Please add an image of your business license to continue.');
		// 	return;
		// }
		// if (!street || street.split(' ').length < 3) {
		// 	Alert.alert('Please enter your street number and name.');
		// 	return;
		// }
		// if (!city) {
		// 	Alert.alert('Please enter your city.');
		// 	return;
		// }
		// if (!(/^\d{5}$/.test(zip))) {
		// 	Alert.alert('Please enter a valid 5-digit zip code.');
		// 	return;
		// }
		// if (!termsOfService) {
		// 	Alert.alert('Please read and accept the terms of service to complete your registration.');
		// 	return;
		// }
		//
		// const statusCode = await register({
		// 	organizationName, email, password, license, street, city, state, zip, termsOfService,
		// });
		// switch (statusCode) {
		// 	case (201 || 202):
		// 		Alert.alert('Registration complete! Please log in to continue.');
		// 		navigate('LoginScreen', { email, password });
		// 		return;
		// 	case 406:
		// 		Alert.alert('Error: not accepted');
		// 		return;
		// 	case 500:
		// 		Alert.alert('Internal server error, please try again later.');
		// 		return;
		// 	default:
		// 		Alert.alert("Sorry, that didn't work, please try again later.");
		// 		console.log(statusCode);
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
					placeholder="info@bananaapp.org"
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
				<Divider
					style={{ marginVertical: 20 }}
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

				<FormTextInput
					label="Business Name"
					value={businessName}
					setValue={setBusinessName}
					style={styles.input}
					error={errorObj.businessName.isTrue}
					errorMessage={errorObj.businessName.message}
				/>

				<FormTextInput
					label="Business Address"
					value={address}
					setValue={setAddress}
					style={styles.input}
					error={errorObj.address.isTrue}
					errorMessage={errorObj.address.message}

				/>

				<View style={[ styles.row, styles.input ]}>
					<FormTextInput
						label="City"
						value={city}
						setValue={setCity}
						style={{ width: '40%' }}
						autoCapitalize="words"
						error={errorObj.city.isTrue}
						errorMessage={errorObj.city.message}
					/>
					<FormTextInput
						label="State"
						type="dropdown"
						dropdownData={stateList}
						value={state}
						setValue={setState}
						style={{ width: '20%' }}
						error={errorObj.state.isTrue}
						errorMessage={errorObj.state.message}
					/>
					<FormTextInput
						label="Zip"
						value={zip}
						setValue={setZip}
						style={{ width: '30%' }}
						autoCapitalize="words"
						error={errorObj.zip.isTrue}
						errorMessage={errorObj.zip.message}
					/>
				</View>
				<FormTextInput
					label="Pick up instructions"
					value={instructions}
					setValue={setInstructions}
					placeholder="Directions on where to pick up item"
					error={errorObj.instructions.isTrue}
					errorMessage={errorObj.instructions.message}
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
						disabled={!termsOfService}
						text="Register"
						onPress={() => alert('wait for data side implementation')}
					/>
				</View>
				<SpacerInline height={50} />


			</ScrollView>
		</KeyboardAvoidingView>
	);
};

