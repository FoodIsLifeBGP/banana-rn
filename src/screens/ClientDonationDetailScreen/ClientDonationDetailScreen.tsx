import React from 'react';
import {
	Image,
	View,
	Text,
	ScrollView,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { stopLocationUpdatesAsync } from 'expo-location';
import useGlobal from '@state';
import { SpacerInline } from '@elements';
import { Divider } from 'react-native-paper';
import styles from './ClientDonationDetailScreen.styles';

const ClientDonationDetailScreen = () => {
	const navigate = useNavigation();
	const { params } = navigate.state;
	const {
		canceled,
		created_at,
		donor_id,
		duration_minutes,
		food_name,
		id,
		image_url,
		measurement,
		per_person,
		pickup_location,
		total_servings,
		updated_at,
	} = params.donation;

	const testImage = require('@assets/images/banana-icon.png');
	const [ state ] = useGlobal() as any;


	const startTime = new Date(created_at);
	const now = new Date();
	const difference = now - startTime;
	const minutesElapsed = Math.round(now.getTime() - (startTime.getTime()) / 1000 / 60);

	const timeLeft = minutesElapsed < duration_minutes
		? duration_minutes - minutesElapsed
		: 0;
	const timeRemaining = () => {
		if (timeLeft === 0) {
			return 'Expired';
		}
		const seconds = Math.round(difference / 1000) < 60 ? Math.round(difference / 1000) : Math.round(difference / 1000) % 60;
		const minutes = Math.round(difference / 1000 / 60) < 60 ? Math.round(difference / 1000 / 60) : Math.round(difference / 1000 / 60) % 60;
		// const hours = Math.round(difference / 1000 / 60 / 60) < 24 ? Math.round(difference / 1000 / 60 / 60) : Math.round(difference / 1000 / 60 / 60) % 24
		return `${minutes} MIN ${seconds} SEC`;
	};

	return (
		<ScrollView style={styles.outerContainer}>
			{/* Image at top */}
			<View style={styles.imageContainer}>
				{/* Need to update this with actual image once we start persisting image urls */}
				<Image source={testImage} style={styles.image} />
			</View>
			{/* Item Details */}
			<View style={styles.card}>
				<Text style={styles.foodTitle}>{food_name}</Text>
				{/* get donor from donor id for below, import icon to use. */}
				{/* {console.log(state)} */}
				<Text style={styles.subtitle}>
					<Image source={testImage} style={styles.icon} />
					<Text style={styles.subtitle}> FROM</Text>
					<Text style={styles.donorSubtitle}>
						{donor_id}
					</Text>
				</Text>
				<Text style={styles.subtitle}>
					<Image source={testImage} style={styles.icon} />
					<Text>
						{total_servings}
						{measurement}
					</Text>
					<Text style={styles.donorSubtitle}>  ·  </Text>
					<Image source={testImage} style={styles.icon} />
					<Text>  [INSERT DISTANCE] MI</Text>
				</Text>
				<Text style={styles.timeRemainingContainer}>{timeRemaining()}</Text>
			</View>
			{/* Pick up Info */}
			<Divider />
			<View style={styles.card}>
				<SpacerInline height={15} />
				<Text style={styles.sectionTitle}>PICK UP INFO</Text>
				<Text style={styles.addressText}>{pickup_location}</Text>
				<Text style={styles.subtitle}>Pickup instructions go here...They do not currently exist. banana banana banana banana...</Text>
				<TouchableOpacity style={styles.readMore}>
					<Text style={styles.readMoreText}>READ MORE</Text>
				</TouchableOpacity>
			</View>
			<Divider />
			{/* Navigation Info */}
			<View style={styles.card}>
				<SpacerInline height={10} />
				<Text style={styles.sectionTitle}>HOW TO GET THERE</Text>
				<Text style={styles.descriptionText}>Transit options to help you get there in time.</Text>
			</View>
			{/* Claim/Cancel buttons */}
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.cancelButton}>
					<Text style={styles.cancelButtonText}>CANCEL</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.claimButton}>
					<Text style={styles.claimButtonText}>CLAIM</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default ClientDonationDetailScreen;