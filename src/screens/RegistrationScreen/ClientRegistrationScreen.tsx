/* eslint-disable no-tabs */
import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
} from 'react-native';
import { Divider } from 'react-native-paper';
import useGlobal from '@state';
import {
	Title,
	LinkButton,
	FormTextInput,
	SpacerInline,
	NavBar,
	Icon,
	InputLabel,
} from '@elements';
import validate from 'validate.js';
import clientConstraints from '@util/constraints/clientRegistration';
import { ClientRegisterProps } from '@state/actions/register';
import styles from './RegistrationScreen.styles';


export default () => {
	const { navigate, goBack } = useNavigation();
	const [ _state, actions ] = useGlobal() as any;
	const { register } = actions;

	const [ termsOfService, setTermsOfService ] = useState(false);
	const [ validateError, setValidateError ] = useState({} as any);
	const [ newClient, setNewClient ] = useState<ClientRegisterProps>({} as ClientRegisterProps);

	const toggleTermsOfService = () => {
		setTermsOfService(!termsOfService);
	};

	const validateInputs = async () => {
		const validateResults = validate(newClient, clientConstraints);
		if (validateResults) {
			setValidateError(validateResults);
		} else {
			const statusCode = await register(newClient);
			// TODO: this code is a work in progress, we need to more robustly handle other status codes and probably log
			// the user in seamlessly rather than redirect to the log-in screen, but I have verified am I able to
			// register new donors to our database using this screen and its related code
			if (statusCode === 201) {
				navigate('LoginScreen', { email: newClient.email, password: newClient.password });
			} else {
				// not sure what the design plan is or surfacing additional errors
				// eslint-disable-next-line no-console
				console.log('Oops and error occurred! Maybe look at your rails console');
			}
		}
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
					value={newClient.email}
					setValue={v => setNewClient({ ...newClient, email: v })}
					style={styles.input}
					placeholder="info@bananaapp.org"
					error={validateError.email}
					errorMessage={validateError.email}
				/>

				<FormTextInput
					label="Password"
					value={newClient.password}
					setValue={v => setNewClient({ ...newClient, password: v })}
					type="password"
					style={styles.input}
					error={validateError.password}
					errorMessage={validateError.password}
				/>


				<FormTextInput
					label="Confirm Password"
					value={newClient.retypedPassword}
					setValue={v => setNewClient({ ...newClient, retypedPassword: v })}
					style={styles.input}
					type="password"
					error={validateError.retypedPassword}
					errorMessage={validateError.retypedPassword}
				/>

				<Divider
					style={{ marginVertical: 20 }}
				/>

				<FormTextInput
					label="First Name"
					value={newClient.firstName}
					setValue={v => setNewClient({ ...newClient, firstName: v })}
					style={styles.input}
					error={validateError.firstName}
					errorMessage={validateError.firstName}
				/>


				<FormTextInput
					label="Last Name"
					value={newClient.lastName}
					setValue={v => setNewClient({ ...newClient, lastName: v })}
					style={styles.input}
					error={validateError.lastName}
					errorMessage={validateError.lastName}
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
						onPress={validateInputs}
					/>
				</View>
				<SpacerInline height={50} />
				<View style={{ flex: 1 }} />
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
