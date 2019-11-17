import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Title, LinkButton, FormTextInput, SpacerInline, Header } from '../../elements';
import styles from './RegistrationScreen.styles';

export default () => {
	const [ email, setEmail ] = useState('');
	const [ password1, setPassword1 ] = useState('');
	const [ license, setLicense ] = useState('');
	const [ street, setStreet ] = useState('');
	const [ city, setCity ] = useState('');
	const [ state, setState ] = useState('');
	const [ zip, setZip ] = useState();

	return (
		<View style={styles.outerContainer}>
			<View>
				<Header showMenu={false} />
				<Title text="Registration." />
				<SpacerInline height={20} />
				<Text style={styles.text}>
					Please add your business's details below.  You will be able to update them once registration is complete.
				</Text>
				<SpacerInline height={40} />
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
					text="Business License No."
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
			</View>

			<View>
				<LinkButton
					text="Register"
					destination="TermsScreen"
				/>
				<SpacerInline height={40} />
			</View>
		</View>
	);
};

