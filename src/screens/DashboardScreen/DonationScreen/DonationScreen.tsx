import React, { useState, useEffect } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	AsyncStorage,
	Alert,
} from 'react-native';
import { Switch } from 'react-native-paper';
import {
	Header,
	SpacerInline,
	FormTextInput,
	LinkButton,
} from '@elements';
import * as colors from '@util/colors';
import createDonation from '@util/createDonation';
import updateDonation from '@util/updateDonation';
import InputLabel from '../../../elements/FormTextInput/InputLabel';
import styles from './DonationScreen.styles';

export default () => {
	const { navigate } = useNavigation();
	const donation = useNavigationParam('donation');
	const edit = useNavigationParam('edit');
	const id = useNavigationParam('id');

	const {
		claims = '',
		created_at = new Date(),
		duration_minutes = 60,
		food_name = '',
		image_url = '',
		measurement = '',
		per_person = '',
		pickup_location = '',
		total_servings = '',
	} = donation || {};

	const [ donor, setDonor ] = useState({} as any);
	const [ jwt, setJwt ] = useState({} as any);
	const [ name, setName ] = useState(food_name);
	const [ sixtyMinuteLimit, setSixtyMinuteLimit ] = useState(true);
	const [ totalServings, setTotalServings ] = useState(total_servings);
	const [ servingName, setServingName ] = useState(measurement);
	const [ perPerson, setPerPerson ] = useState(per_person);
	const [ pickupLocation, setPickupLocation ] = useState(pickup_location);
	const [ loaded, setLoaded ] = useState(false);
	const [ cancel, setCancel ] = useState(false);
	const [ stop, setStop ] = useState(false);

	const icon = require('@assets/images/banana-icon.png');

	const submitDonation = async () => {
		const statusCode = id
			? (
				await updateDonation({
					id, donorId: donor.id, jwt, name, sixtyMinuteLimit, totalServings, servingName, perPerson, pickupLocation,
				}))
			: (
				await createDonation({
					donorId: donor.id, jwt, name, sixtyMinuteLimit, totalServings, servingName, perPerson, pickupLocation,
				}));
		switch (statusCode) {
			case 201: Alert.alert('Donation created!'); navigate('LoginSuccessScreen'); return;
			case 202: Alert.alert('Donation updated!'); navigate('LoginSuccessScreen'); return;
			case (400 || 406): Alert.alert('Bad data - sorry, please try again!'); return;
			case (401 || 403): Alert.alert('Authentication error - please log in again.'); return;
			case 404: Alert.alert('Network error - sorry, please try again!'); return;
			case 500: Alert.alert('Server problem - sorry, please try again!'); return;
			default: Alert.alert('Sorry, something went wrong. Please try again.');
		}
	};

	const getDonorAndJwt = async () => {
		await setDonor(JSON.parse(await AsyncStorage.getItem('donor') || ''));
		await setJwt(await AsyncStorage.getItem('jwt'));
		if (donor && jwt) {
			setPickupLocation(donor.pickup_location);
			setLoaded(true);
		}
	};

	useEffect(() => {
		getDonorAndJwt();
	}, [ loaded ]);

	// Stop and cancel are exclusive, so only one can be true at a time.
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
						text="Donating:"
						value={name}
						setValue={setName}
						width="50%"
					/>
				</View>

				<SpacerInline height={40} />
				<View>
					<InputLabel text="Time limit" />
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<TouchableOpacity
							onPress={() => setSixtyMinuteLimit(false)}
							style={{
								...styles.timeLimitButton,
								borderColor: !sixtyMinuteLimit ? 'white' : colors.BANANA_YELLOW,
							}}
						>
							<Text style={styles.buttonText}>30 MIN</Text>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => setSixtyMinuteLimit(true)}
							style={{
								...styles.timeLimitButton,
								borderColor: sixtyMinuteLimit ? 'white' : colors.BANANA_YELLOW,
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
						text="Serving name (bunch, etc.)"
						value={servingName}
						setValue={setServingName}
						inline={true}
						width="40%"
						upperCase={false}
					/>

					<FormTextInput
						text="# per person"
						value={perPerson && perPerson.toString()}
						setValue={setPerPerson}
						inline={true}
						width="20%"
						upperCase={false}
					/>

					<FormTextInput
						text="Total # of servings"
						value={totalServings && totalServings.toString()}
						setValue={setTotalServings}
						inline={true}
						width="20%"
						upperCase={false}
					/>

					<FormTextInput
						text="Pickup spot"
						value={pickupLocation}
						setValue={setPickupLocation}
						inline={true}
						width="60%"
						upperCase={false}
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
