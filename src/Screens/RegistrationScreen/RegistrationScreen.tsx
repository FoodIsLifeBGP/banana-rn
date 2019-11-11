import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Title, LinkButton, FormTextInput } from '../../Elements';
import styles from './RegistrationScreen.styles';

export default () => {
	const [ email, setEmail ] = useState('');
	const [ password1, setPassword1 ] = useState('');
	const [ password2, setPassword2 ] = useState('');
	const [ license, setLicense ] = useState('');
	const [ street, setStreet ] = useState('');
	const [ city, setCity ] = useState('');
	const [ state, setState ] = useState('');
	const [ zip, setZip ] = useState();

	return (
		<ScrollView style={styles.outerContainer}>
			<View style={{ height: 120 }} />
			<Title text="Registration." />
			<View style={{ height: 20 }} />

			<Text style={styles.text}>
				Please add your business's details below.  You will be able to update them once registration is complete.
			</Text>
			<View style={{ height: 20 }} />

			<FormTextInput
				text="Email Address"
				value={email}
				setValue={setEmail}
			/>

			<FormTextInput
				text="Password"
				value={password1}
				setValue={setPassword1}
			/>

			<FormTextInput
				text="Re-Enter Password"
				value={password2}
				setValue={setPassword2}
			/>

			<FormTextInput
				text="Business License No"
				value={license}
				setValue={setLicense}
			/>

			<FormTextInput
				text="Street Address"
				value={street}
				setValue={setStreet}
				autoCapitalize="words"
			/>

			<View style={{ flexDirection: 'row' }}>
				<FormTextInput
					text="City"
					value={city}
					setValue={setCity}
					width='40%'
					autoCapitalize="words"
				/>
				<FormTextInput
					text="State"
					value={state}
					setValue={setState}
					width='15%'
					autoCapitalize="words"
					/>
				<FormTextInput
					text="Zip"
					value={zip}
					setValue={setZip}
					width='35%'
					autoCapitalize="words"
				/>
			</View>

			<View style={{ height: 40 }} />
			<LinkButton
				text="Register"
				destination="DashboardScreen"
			/>
		</ScrollView>
	);
};

