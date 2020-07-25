import React, { useState } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import {
	View, Text, Image, Dimensions, Alert, ScrollView,
} from 'react-native';
import useGlobal from '@state';
import {
	SpacerInline, Icon, TextButton,
} from '@elements';
import QRCode from 'react-native-qrcode-svg';
import * as colors from '@util/colors';
import typography from '@util/typography';
import { ButtonStyle } from '@elements/Button';
import styles from './MakeClaimScreen.styles';

const MakeClaimScreen = () => {
	const { navigate } = useNavigation();
	const [ globalState, globalActions ] = useGlobal() as any;
	const { claimDonation } = globalActions;
	const { user } = globalState;
	const donation = useNavigationParam('donation');
	const { donor } = donation;

	const cancelBtnStyle: ButtonStyle = {
		default: {
			background: colors.BANANA_YELLOW,
			foreground: colors.NAVY_BLUE,
		},
	};

	const claimBtnStyle: ButtonStyle = {
		default: {
			background: colors.NAVY_BLUE,
			foreground: colors.WHITE,
		},
	};

	const handleClaim = async () => {
		const response = await claimDonation(donation.id, user.id);
		if (response.status !== 202) {
			console.log('Handle this error better');
		} else {
			navigate('ClaimDetailsScreen', { claim: response.claim, donation });
		}
	};

	const handleCancel = () => {
		navigate('DashboardScreen');
	};

	return (

		<View style={styles.outerContainer}>
			<ScrollView>
				<View>
					<Image source={require('@assets/images/bananas.jpg')} style={styles.header} />
				</View>
				<View style={styles.mainContent}>
					<View style={styles.section}>
						<View style={styles.title}>
							<Text style={typography.h3}>{donation.food_name}</Text>
						</View>
						<View style={styles.itemWithIcon}>
							<Icon name="location" size={16} />
							<Text style={typography.body4}>{donor.donor_name}</Text>
						</View>
						<View style={styles.itemWithIcon}>
							<Icon name="distance" size={16} />
							<Text style={typography.body4}>TODO: ??mi</Text>
						</View>
					</View>
					<View style={styles.section}>
						<View style={styles.title}>
							<Text style={typography.h3}>Pick Up Info</Text>
						</View>
						<View style={styles.smallTitle}>
							<Text style={typography.h4}>Address</Text>
						</View>
						<View style={styles.item}>
							<Text style={typography.body4}>{`${donor.address_street} ${donor.address_city}, ${donor.address_state}, ${donor.address_zip}`}</Text>
						</View>
						<View style={styles.smallTitle}>
							<Text style={typography.h4}>Instructions</Text>
						</View>
						<View style={styles.item}>
							<Text style={typography.body4}>{donation.pickup_instructions}</Text>
						</View>
					</View>
					<View>
						<View>
							<Text style={typography.h3}>How to get There</Text>
						</View>
						<View style={styles.itemWithIcon}>
							<Icon name="walk" size={16} />
							<SpacerInline width={2} />
							<Text style={typography.body4}>Walking ?? min</Text>
						</View>
						<View style={styles.itemWithIcon}>
							<Icon name="transit" size={16} />
							<SpacerInline width={2} />
							<Text style={typography.body4}>Public Transit ?? min</Text>
						</View>
						<View style={styles.itemWithIcon}>
							<Icon name="bike" size={16} />
							<SpacerInline width={2} />
							<Text style={typography.body4}>Bike ?? min</Text>
						</View>
					</View>
				</View>
			</ScrollView>
			<View style={styles.buttonPanel}>
				<TextButton text="Cancel" buttonStyle={cancelBtnStyle} outlined={true} onPress={handleCancel} />
				<SpacerInline width={10} />
				<TextButton text="Claim" buttonStyle={claimBtnStyle} onPress={handleClaim} />
			</View>
		</View>


	);
};


export default MakeClaimScreen;
