/* eslint-disable no-tabs */
import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import {
	KeyboardAvoidingView,
	ScrollView,
	Text, TouchableOpacity,
	View,
	Platform,
} from 'react-native';
import { Divider } from 'react-native-paper';
import {
	FormTextInput,
	LinkButton,
	SpacerInline,
	Title, Icon,
} from '@elements';
import useGlobal from '@state';
import { getStateList } from '@util/statesAbbr';
import donorConstraints from '@util/constraints/donorRegistration';
import validate from 'validate.js';
import { DonorRegisterProps } from '@state/actions/register';
import { Alert } from '@state/index.types';
import styles from './RegistrationScreen.styles';

export default () => {
	const { navigate, goBack } = useNavigation();
	const [ _state, actions ] = useGlobal() as any;
	const { register, updateAlert } = actions;
	const [ newDonor, setNewDonor ] = useState<DonorRegisterProps>({ state: 'WA' } as DonorRegisterProps);
	const [ validationErrors, setValidationErrors ] = useState({} as any);
	const [ termsOfService, setTermsOfService ] = useState(false);
	const stateList = getStateList();

	const toggleTermsOfService = () => setTermsOfService(!termsOfService);
	const validateInputs = async () => {
		const validateResults = validate(newDonor, donorConstraints);
		if (validateResults) {
			setValidationErrors(validateResults);
		} else {
			const statusCode = await register(newDonor);
			switch (statusCode) {
				case 201: {
					navigate('LoginSuccessScreen');
					break;
				}
				case 409: {
					updateAlert({
						title: 'Error',
						message: `This email address has already been used (Error code:${statusCode})`,
						dismissable: true,
					} as Alert);
					break;
				}
				case 500: {
					updateAlert({
						title: 'Error',
						message: `Network Issues (Error code:${statusCode})`,
						dismissable: true,
					} as Alert);
					break;
				}
				default: {
					updateAlert({
						title: 'Error',
						message: `Unknown Error (Error code:${statusCode})`,
						dismissable: true,
					} as Alert);
				}
			}
		}
	};

	return (
		<KeyboardAvoidingView
			style={styles.keyboardAvoidContainer}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Android and iOS both interact with this prop differently
			enabled={true}
			keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
		>
			<View style={styles.header}>
				<Title text="Registration" />
			</View>

			<ScrollView style={styles.scrollContainer}>
				<FormTextInput
					label="Email"
					value={newDonor.email}
					setValue={s => setNewDonor({ ...newDonor, email: s })}
					style={styles.input}
					placeholder="info@bananaapp.org"
					error={!!validationErrors.email}
					errorMessage={validationErrors.email}
				/>

				<FormTextInput
					label="Password"
					value={newDonor.password}
					setValue={s => setNewDonor({ ...newDonor, password: s })}
					type="password"
					style={styles.input}
					error={!!validationErrors.password}
					errorMessage={validationErrors.password && validationErrors.password.join(', ')}
				/>


				<FormTextInput
					label="Confirm Password"
					value={newDonor.retypedPassword}
					setValue={s => setNewDonor({ ...newDonor, retypedPassword: s })}
					style={styles.input}
					type="password"
					error={!!validationErrors.retypedPassword} // not doing anything right now
					errorMessage={validationErrors.retypedPassword}
				/>
				<Divider
					style={{ marginVertical: 20 }}
				/>

				<FormTextInput
					label="First Name"
					value={newDonor.firstName}
					setValue={s => setNewDonor({ ...newDonor, firstName: s })}
					style={styles.input}
					error={!!validationErrors.firstName}
					errorMessage={validationErrors.firstName}
				/>


				<FormTextInput
					label="Last Name"
					value={newDonor.lastName}
					setValue={s => setNewDonor({ ...newDonor, lastName: s })}
					style={styles.input}
					error={!!validationErrors.lastName}
					errorMessage={validationErrors.lastName}

				/>

				<FormTextInput
					label="Business Name"
					value={newDonor.businessName}
					setValue={s => setNewDonor({ ...newDonor, businessName: s })}
					style={styles.input}
					error={!!validationErrors.businessName}
					errorMessage={validationErrors.businessName}
				/>

				<FormTextInput
					label="Business Address"
					value={newDonor.businessAddress}
					setValue={s => setNewDonor({ ...newDonor, businessAddress: s })}
					style={styles.input}
					error={!!validationErrors.businessAddress}
					errorMessage={validationErrors.businessAddress}

				/>

				<View style={[ styles.row, styles.input ]}>
					<FormTextInput
						label="City"
						value={newDonor.city}
						setValue={s => setNewDonor({ ...newDonor, city: s })}
						style={{ width: '40%' }}
						autoCapitalize="words"
						error={!!validationErrors.city}
						errorMessage={validationErrors.city}
					/>
					<FormTextInput
						label="State"
						type="dropdown"
						dropdownData={stateList}
						value={newDonor.state}
						setValue={s => setNewDonor({ ...newDonor, state: s })}
						style={{ width: '20%' }}
						error={!!validationErrors.state}
						errorMessage={validationErrors.state}
					/>
					<FormTextInput
						label="Zip"
						value={newDonor.zip}
						setValue={s => setNewDonor({ ...newDonor, zip: s })}
						style={{ width: '30%' }}
						autoCapitalize="words"
						error={!!validationErrors.zip}
						errorMessage={validationErrors.zip}
					/>
				</View>
				<FormTextInput
					label="Pick up instructions"
					value={newDonor.pickupInstructions}
					setValue={s => setNewDonor({ ...newDonor, pickupInstructions: s })}
					placeholder="Directions on where to pick up item"
					error={!!validationErrors.pickupInstructions}
					errorMessage={validationErrors.pickupInstructions}
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


			</ScrollView>
		</KeyboardAvoidingView>
	);
};

