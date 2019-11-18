import React, { useState, useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { Header, SpacerInline, FormTextInput, LinkButton } from '../../../elements';
import InputLabel from '../../../elements/FormTextInput/InputLabel';
import * as colors from '../../../util/colors';
import createDonation from '../../../util/createDonation';
import { Donation } from './DonationScreen.type';
import styles from './DonationScreen.styles';

/* eslint-disable camelcase */

export default ({ donation }: Donation) => {
	const { navigate } = useNavigation();
	
	const {
		claims = '',
		created_at = new Date,
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

	const icon = require('../../../../assets/images/banana-icon.png');

	const submitDonation = () => {
		createDonation({
			id: donor.id, jwt, name, sixtyMinuteLimit, totalServings, servingName, perPerson, pickupLocation,
		})
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
	}, [loaded]);


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
				<View style={{  }}>
					<InputLabel text="Time limit" />
					<View style={{ flexDirection: 'row'}}>
						<TouchableOpacity
							onPress={() => setSixtyMinuteLimit(false)}
							style={{ ...styles.timeLimitButton, borderColor:
								!sixtyMinuteLimit 
									? 'white'
									: colors.BANANA_YELLOW
						}}>
							<Text style={styles.buttonText}>30 MIN</Text>
						</TouchableOpacity>

						<SpacerInline width="5%" />

						<TouchableOpacity
							onPress={() => setSixtyMinuteLimit(true)}
							style={{ ...styles.timeLimitButton, borderColor:
								sixtyMinuteLimit
									? 'white'
									: colors.BANANA_YELLOW
						}}>
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
						value={perPerson}
						setValue={setPerPerson}
						inline={true}
						width="20%"
						upperCase={false}
						/>

					<FormTextInput 
						text="Total # of servings"
						value={totalServings}
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
			<View style={styles.createContainer}>
				<LinkButton
					text="Create"
					onPress={submitDonation}
				/>
				<SpacerInline height={40} />
			</View>
		</View>
	);
};
