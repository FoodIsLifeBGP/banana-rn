import React, { useState } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import {
	View, Text, Image, ScrollView,
} from 'react-native';
import useGlobal from '@state';
import {
	SpacerInline, LinkButton, NavBar,
} from '@elements';
import typography from '@util/typography';
import { categoryImage } from '@util/donationCategory';
import styles from './DonationsDetailScreen.styles';


const DonationsDetailScreen = () => {
	const { navigate } = useNavigation();
	const [ globalState, globalActions ] = useGlobal() as any;
	const { cancelDonation } = globalActions;
	const donation = useNavigationParam('donation');

	const handleCancel = async () => {
		const responseCode = await cancelDonation(donation.id);
		if (responseCode !== 202) {
			console.log('Handle this error better');
		} else {
			navigate('DashboardScreen');
		}
	};


	return (
		<ScrollView style={styles.outerContainer}>
			<View>
				<NavBar showBackButton={true} />
				<SpacerInline height={20} />
			</View>
			<View style={styles.contentContainer}>
				<Text style={typography.h5}>
					{donation.category}
				</Text>
				<View style={styles.iconContainer}>
					<Image source={categoryImage(donation.category)} style={styles.icon} />
				</View>
				<Text style={[ typography.h4 ]}>
					{donation.food_name}
				</Text>
				<Text style={[ typography.h5 ]}>
					{`About ${donation.total_amount}`}
				</Text>
			</View>

			<View style={styles.infoContainer}>
				<View style={styles.infoPair}>
					<Text style={typography.h3}>
						PICKUP ADDRESS
					</Text>
					<Text style={styles.infoText}>
						{`${donation.donor.address_street} ${donation.donor.address_city}, ${donation.donor.address_state} ${donation.donor.address_zip}`}
					</Text>
				</View>
				<View style={styles.infoPair}>
					<Text style={typography.h3}>
						PICKUP INSTRUCTIONS
					</Text>
					<Text style={styles.infoText}>
						{donation.pickup_instructions}
					</Text>
				</View>
				<View style={styles.infoPair}>
					<Text style={typography.h3}>
						RESERVED FOR
					</Text>
					<Text style={styles.infoText}>
					Add claim info here
					</Text>
				</View>
			</View>
			<SpacerInline height={20} />
			<LinkButton text="CANCEL DONATION" onPress={handleCancel} />
		</ScrollView>
	);
};

export default DonationsDetailScreen;
