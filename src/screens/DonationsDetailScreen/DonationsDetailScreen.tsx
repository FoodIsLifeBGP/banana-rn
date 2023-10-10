import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
	Image, ScrollView, Text, View,
} from 'react-native';
import useGlobal from '@state';
import {
	Icon, LinkButton, NavBar, SpacerInline,
} from '@elements';
import typography from '@util/typography';
import { categoryImage } from '@util/donationCategory';
import * as colors from '@util/colors';
import styles from './DonationsDetailScreen.styles';


function DonationsDetailScreen() {
	const { navigate } = useNavigation();
	const [ globalState, globalActions ] = useGlobal() as any;
	const { cancelDonation } = globalActions;
	const route = useRoute();
	const { donation } = route.params;
	const hasClaim = !!donation.claim;
	const [ state, { updateAlert } ] = useGlobal() as any;

	const handleCancel = async () => {
		const responseCode = await cancelDonation(donation.id);
		if (responseCode !== 202) {
			console.log('Handle this error better');
			// Add Common UH-OH modal here
		} else {
			navigate('DonorDashboardScreen');
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
					<View style={styles.claimInfo}>
						<Icon color={hasClaim ? colors.BANANA_YELLOW : colors.GRAY} name="smile" size={50} />
						<Text style={typography.body3}>{hasClaim ? donation.claim.client_name : 'item not claimed'}</Text>
					</View>
				</View>
			</View>
			<SpacerInline height={20} />
			<LinkButton
				text="CANCEL DONATION"
				onPress={() => updateAlert({ type: 'cancel donation', dismissable: false, confirmFn: () => handleCancel() })}
				disabled={hasClaim}
			/>
		</ScrollView>
	);
};

export default DonationsDetailScreen;
