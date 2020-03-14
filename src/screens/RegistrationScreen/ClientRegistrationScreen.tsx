import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import {
	ScrollView,
	View,
	Text,
	Alert,
	TextInput,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import useGlobal from '@state';
import * as colors from '@util/colors';
import {
	Title,
	LinkButton,
	FormTextInput,
	SpacerInline,
	Header,
	Icon,
	InputLabel,
} from '@elements';
import styles from './RegistrationScreen.styles';

export default () => {
	const { navigate } = useNavigation();
	const [ _state, actions ] = useGlobal() as any;
	const { register } = actions;

	const transportationMethods = [
		'Walk',
		'Bike',
		'Public',
		'Car',
	];

	const ethnicities = [
		'Prefer not to say',
		'American Indian or Alaskan Native',
		'Asian',
		'Black or African American',
		'Hispanic or Latino',
		'Native Hawaiian/Pacific Islander',
		'White',
	];

	const genders = [
		'Prefer not to say',
		'Female',
		'Male',
		'Non-binary',
		'Other',
	];

	const itemizeList = list => list.map(item => ({ label: item, value: item }));

	const ChevronDown = () => (
		<View style={styles.iconContainer}>
			<Icon
				name="chevron-down"
				style={styles.chevronIcon}
			/>
		</View>
	);

	const selectPlaceholder = {
		label: 'Select...',
		color: 'gray',
		value: null,
	};

	const [ hidePwd, setHidePwd ] = useState(true);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ street, setStreet ] = useState('');
	const [ city, setCity ] = useState('');
	const [ state, setState ] = useState('WA');
	const [ zip, setZip ] = useState('');
	const [ transportationMethod, setTransportationMethod ] = useState();
	const [ gender, setGender ] = useState();
	const [ ethnicity, setEthnicity ] = useState();
	const [ termsOfService, setTermsOfService ] = useState(false);

	const toggleTermsOfService = () => {
		setTermsOfService(!termsOfService);
	};

	const validateAndSubmit = async () => {
		if (!email.includes('@') || !email.includes('.')) { Alert.alert('Please enter a valid email address.'); return; }
		if (password.length < 8) { Alert.alert('Please enter a password at least 8 characters long.'); return; }
		if (!street || street.split(' ').length < 3) { Alert.alert('Please enter your street number and name.'); return; }
		if (!city) { Alert.alert('Please enter your city.'); return; }
		if (!(/^\d{5}$/.test(zip))) { Alert.alert('Please enter a valid 5-digit zip code.'); return; }
		if (!transportationMethod) { Alert.alert('Please select your preferred method of transportation.'); return; }
		if (!termsOfService) { Alert.alert('Please read and accept the terms of service to complete your registration.'); return; }

		const statusCode = await register({
			email, password, street, city, state, zip, transportationMethod, ethnicity, gender,
		});
		switch (statusCode) {
			case (201 || 202): Alert.alert('Registration complete! Please log in to continue.'); navigate('LoginScreen', { email, password }); return;
			case 406: Alert.alert('Error: not accepted'); return;
			case 500: Alert.alert('Internal server error, please try again later.'); return;
			default: Alert.alert("Sorry, that didn't work, please try again later."); console.log(statusCode);
		}
	};

	return (
		<ScrollView contentContainerStyle={styles.outerContainer}>
			<View>
				<Header showMenu={false} backDestination="LoginScreen" />
				<Title text="Registration." />
				<Text style={styles.text}>
					Add your details below.  Please give us 24-48 hours to verify your account.
				</Text>
				<SpacerInline height={20} />

				<FormTextInput
					text="Email Address"
					value={email}
					setValue={setEmail}
					style={styles.input}
				/>

				<InputLabel text="Password" />
				<View style={styles.passwordContainer}>
					<View style={{ flex: 8 }}>
						<TextInput
							textContentType="password"
							value={password}
							secureTextEntry={hidePwd}
							onChangeText={setPassword}
							style={[ styles.input, styles.iconPadding ]}
							autoCapitalize="none"
							autoCorrect={false}
						/>
					</View>
					<View style={styles.iconContainer}>
						<TouchableWithoutFeedback
							onPress={() => setHidePwd(!hidePwd)}
						>
							<Icon name={hidePwd ? 'lock' : 'unlock'} style={styles.icon} />
						</TouchableWithoutFeedback>
					</View>
				</View>

				<FormTextInput
					text="Street Address"
					value={street}
					setValue={setStreet}
					autoCapitalize="words"
					style={styles.input}
				/>

				<View style={styles.row}>
					<FormTextInput
						text="City"
						value={city}
						setValue={setCity}
						width="41%"
						autoCapitalize="words"
						style={styles.input}
					/>
					<FormTextInput
						text="State"
						value={state}
						setValue={() => {}}
						width="18%"
						autoCapitalize="words"
						disabled={true}
						style={styles.input}
					/>
					<FormTextInput
						text="Zip"
						value={zip}
						setValue={setZip}
						width="33%"
						autoCapitalize="words"
						style={styles.input}
					/>
				</View>

				<InputLabel text="Ethnicity" />
				<RNPickerSelect
					value={ethnicity}
					placeholder={selectPlaceholder}
					onValueChange={(val, _i) => setEthnicity(val)}
					textInputProps={{ style: [ styles.input, styles.iconPadding ] }}
					Icon={() => <ChevronDown />}
					items={itemizeList(ethnicities)}
				/>

				<InputLabel text="Ethnicity" />
				<RNPickerSelect
					value={ethnicity}
					placeholder={selectPlaceholder}
					onValueChange={(val, _i) => setEthnicity(val)}
					textInputProps={{ style: [ styles.input, styles.iconPadding ] }}
					Icon={() => <ChevronDown />}
					items={itemizeList(ethnicities)}
				/>

				<InputLabel text="Ethnicity" />
				<RNPickerSelect
					value={ethnicity}
					placeholder={selectPlaceholder}
					onValueChange={(val, _i) => setEthnicity(val)}
					textInputProps={{ style: [ styles.input, styles.iconPadding ] }}
					Icon={() => <ChevronDown />}
					items={itemizeList(ethnicities)}
				/>

				<InputLabel text="Ethnicity" />
				<RNPickerSelect
					value={ethnicity}
					placeholder={selectPlaceholder}
					onValueChange={(val, _i) => setEthnicity(val)}
					textInputProps={{ style: [ styles.input, styles.iconPadding ] }}
					Icon={() => <ChevronDown />}
					items={itemizeList(ethnicities)}
				/>

				<View style={styles.row}>
					<View style={{ width: '48%' }}>
						<InputLabel text="Gender" />
						<RNPickerSelect
							value={gender}
							onValueChange={(val, _i) => setGender(val)}
							placeholder={selectPlaceholder}
							textInputProps={{ style: [ styles.input, styles.iconPadding ] }}
							Icon={() => <ChevronDown />}
							items={itemizeList(genders)}
						/>
					</View>

					<View style={{ width: '48%' }}>
						<InputLabel text="Transportation" />
						<RNPickerSelect
							value={transportationMethod}
							onValueChange={(val, _i) => setTransportationMethod(val)}
							placeholder={selectPlaceholder}
							textInputProps={{ style: styles.input }}
							Icon={() => <ChevronDown />}
							items={itemizeList(transportationMethods)}
						/>
					</View>
				</View>

				<SpacerInline height={10} />
				<View style={styles.checkboxRow}>
					<View style={styles.checkBox}>
						<Checkbox
							status={termsOfService ? 'checked' : 'unchecked'}
							onPress={toggleTermsOfService}
							color={colors.NAVY_BLUE}
							uncheckedColor="white"
						/>
					</View>
					<SpacerInline width={10} />
					<Text style={styles.text}>Accept</Text>
					<SpacerInline width={10} />
					<View style={{ top: 9 }}>
						<LinkButton
							text="Terms of Service"
							destination="TermsScreen"
						/>
					</View>
				</View>
			</View>

			<View>
				<SpacerInline height={20} />
				<LinkButton
					text="Register"
					onPress={validateAndSubmit}
				/>
				<SpacerInline height={40} />
			</View>
		</ScrollView>
	);
};
