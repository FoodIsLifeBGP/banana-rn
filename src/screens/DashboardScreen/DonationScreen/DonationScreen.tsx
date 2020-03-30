import React, { useState } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	Alert,
} from 'react-native';
import { Switch } from 'react-native-paper';
import useGlobal from '@state';
import {
	Header,
	SpacerInline,
	FormTextInput,
	LinkButton,
	InputLabel,
} from '@elements';
import * as colors from '@util/colors';
import styles from './DonationScreen.styles';

export default () => {
	const [ state, actions ] = useGlobal() as any;
	const { user, jwt } = state;
	const { postDonation, logOut, getDonationsOrClaims } = actions;
	const { navigate } = useNavigation();
	const donation = useNavigationParam('donation');
	const edit = useNavigationParam('edit');
	const donationId = useNavigationParam('id') || null;

	const {
		claims = '',
		created_at = new Date(),
		duration_minutes = 60,
		food_name = '',
		image_url = '',
		measurement = '',
		per_person = '',
		pickup_location = state.user.pickup_location || '',
		total_servings = '',
	} = donation || {};

	const [ name, setName ] = useState(food_name);
	const [ durationInMinutes, setDurationInMinutes ] = useState(60);
	const [ totalServings, setTotalServings ] = useState(total_servings);
	const [ servingName, setServingName ] = useState(measurement);
	const [ perPerson, setPerPerson ] = useState(per_person);
	const [ pickupLocation, setPickupLocation ] = useState(pickup_location);
	const [ cancel, setCancel ] = useState(false);
	const [ stop, setStop ] = useState(false);

	const icon = require('@assets/images/banana-icon.png');

	const submitDonation = async () => {
		if (!name) { Alert.alert('Please add the name of your donation.'); return; }
		if (/[^a-z\s]/i.test(name)) { Alert.alert('Please enter a donation name with letters only.'); return; }
		if (!servingName) { Alert.alert('Please add a serving name.'); return; }
		if (/[^a-z\s]/i.test(servingName)) { Alert.alert('Please enter a serving name with letters only.'); return; }
		if (!totalServings || totalServings < 0) { Alert.alert('Please add at least one total serving.'); return; }
		if (!perPerson || perPerson < 0) { Alert.alert('Please add at least one per person.'); return; }
		if (!pickupLocation) { Alert.alert('Please enter a pickup location.'); return; }

		const donationProps = {
			donationId, donorId: user.id, jwt, name, durationInMinutes, totalServings, servingName, perPerson, pickupLocation, cancel,
		};
		if (!donationId) { delete donationProps.donationId; }
		const statusCode = await postDonation(donationProps);
		switch (statusCode) {
			case 201: Alert.alert('Donation created!'); getDonationsOrClaims(); navigate('LoginSuccessScreen'); return;
			case 202: Alert.alert('Donation updated!'); getDonationsOrClaims(); navigate('LoginSuccessScreen'); return;
			case (400 || 406): Alert.alert('Bad data - sorry, please try again!'); return;
			case (401 || 403): Alert.alert('Authentication error - please log in again.'); logOut(); navigate('LoginScreen'); return;
			case 404: Alert.alert('Network error - sorry, please try again!'); return;
			case 500: Alert.alert('Server problem - sorry, please try again!'); return;
			default: Alert.alert('Sorry, something went wrong. Please try again.');
		}
	};

	const toggleCancel = () => {
		setCancel(!cancel); setStop(false);
	};
	const toggleStop = () => {
		setStop(!stop); setCancel(false);
	};

	return (
		<View style={styles.outerContainer}>
			<View>
				<Header showMenu={false} />
				<SpacerInline height={20} />

				<View style={styles.iconRow}>
					<View style={styles.iconContainer}>
						<Image source={icon} style={styles.icon} />
					</View>
					<FormTextInput
						label="Donating:"
						value={name}
						setValue={setName}
						style={{ width: '50%' }}
					/>
				</View>

				<SpacerInline height={40} />
				<View>
					<InputLabel text="Time limit" />
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<TouchableOpacity
							onPress={() => setDurationInMinutes(30)}
							style={{
								...styles.timeLimitButton,
								borderColor: durationInMinutes === 30 ? 'white' : colors.BANANA_YELLOW,
							}}
						>
							<Text style={styles.buttonText}>30 MIN</Text>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => setDurationInMinutes(60)}
							style={{
								...styles.timeLimitButton,
								borderColor: durationInMinutes === 60 ? 'white' : colors.BANANA_YELLOW,
							}}
						>
							<Text style={styles.buttonText}>60 MIN</Text>
						</TouchableOpacity>
					</View>
					<SpacerInline height={20} />

					<Text style={styles.infoText}>
						How are they divided up?
					</Text>

					<FormTextInput
						label="Serving name (bunch, etc.)"
						value={servingName}
						setValue={setServingName}
						style={{ width: '40%' }}
					/>

					<FormTextInput
						label="# per person"
						value={perPerson && perPerson.toString()}
						setValue={setPerPerson}
						style={{ width: '20%' }}
					/>

					<FormTextInput
						label="Total # of servings"
						value={totalServings && totalServings.toString()}
						setValue={setTotalServings}
						style={{ width: '20%' }}
					/>

					<FormTextInput
						label="Pickup spot"
						value={pickupLocation}
						setValue={setPickupLocation}
						style={{ width: '60%' }}
					/>
				</View>
			</View>

			{ edit && (
				<>
					<View style={{ flexDirection: 'column' }}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
							<InputLabel text="Cancel donation?" />
							<Switch value={cancel} onValueChange={toggleCancel} color={colors.NAVY_BLUE} />
						</View>
						<Text style={styles.infoText}>Any outstanding claims will also be canceled.</Text>
					</View>

					<View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
							<InputLabel text="Stop donation?" />
							<Switch value={stop} onValueChange={toggleStop} color={colors.NAVY_BLUE} />
						</View>
						<Text style={styles.infoText}>Existing claims will still be fulfilled, but the donation will become inactive.</Text>
					</View>
				</>
			)}

			<View style={styles.createContainer}>
				{
					edit
						? (
							<LinkButton
								text="Save Changes"
								onPress={submitDonation}
							/>
						)
						: (
							<LinkButton
								text="Create"
								onPress={submitDonation}
							/>
						)
				}

				<SpacerInline height={40} />
			</View>
		</View>
	);
};
