import React from 'react';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
import {
	Dimensions, ImageBackground, ScrollView, Text, View,
} from 'react-native';
import { Icon, SpacerInline, TextButton } from '@elements';
import QRCode from 'react-native-qrcode-svg';
import * as colors from '@util/colors';
import typography from '@util/typography';
import { ButtonStyle } from '@elements/Button';
import claimStyles from '@util/claimStyles';
import styles from './ClaimDetailsScreen.styles';


export default () => {
	const { navigate } = useNavigation();
	const donation = useNavigationParam('donation');
	const claim = useNavigationParam('claim');
	const { donor } = donation;

	const claimBtnStyle: ButtonStyle = {
		default: {
			background: colors.NAVY_BLUE,
			foreground: colors.WHITE,
		},
	};
	const screenHeight = Math.round(Dimensions.get('window').height);
	const screenWidth = Math.round(Dimensions.get('window').width);

	const address = `${donor.address_street} ${donor.address_city}, ${donor.address_state}, ${donor.address_zip}`;
	return (

		<View style={claimStyles.outerContainer}>
			<ScrollView>
				<View>
					<ImageBackground source={require('@assets/images/bananas.jpg')} style={claimStyles.header}>
						<Text onPress={() => navigate('DashboardScreen')} style={[ typography.h2, claimStyles.closeLnk ]}>X</Text>
					</ImageBackground>
				</View>
				<View style={claimStyles.mainContent}>
					<View style={claimStyles.section}>
						<View style={[ claimStyles.title, { flexDirection: 'row' } ]}>
							<View><Text style={typography.h3}>{donation.food_name}</Text></View>
							<SpacerInline width={10} />
							<View style={styles.claimedDonation}>
								<Text style={styles.claimedTag}>CLAIMED</Text>
							</View>
						</View>
						<View style={claimStyles.itemWithIcon}>
							<Icon name="location" size={16} />
							<Text style={typography.body4}>{donor.donor_name}</Text>
						</View>
						<View style={claimStyles.itemWithIcon}>
							<Icon name="distance" size={16} />
							<Text style={typography.body4}>{donation.distance && `${donation.distance.toFixed(1)} mi`}</Text>
						</View>
					</View>
					<View style={claimStyles.section}>
						<View style={claimStyles.title}>
							<Text style={typography.h3}>Pick Up Info</Text>
						</View>
						<View style={claimStyles.smallTitle}>
							<Text style={typography.h4}>Address</Text>
						</View>
						<View style={claimStyles.item}>
							<Text style={typography.body4}>
								{address}
							</Text>
						</View>
						<View style={claimStyles.smallTitle}>
							<Text style={typography.h4}>Instructions</Text>
						</View>
						<View style={claimStyles.item}>
							<Text style={typography.body4}>{donation.pickup_instructions}</Text>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
							<TextButton text="Directions" buttonStyle={claimBtnStyle} />
						</View>
					</View>
					<View>
						<View style={claimStyles.title}>
							<Text style={typography.h3}>QR Code</Text>
						</View>
						<View style={styles.qrContainer}>
							<QRCode
								backgroundColor={colors.BANANA_YELLOW}
								value={claim.qr_code}
								size={Math.min(screenWidth, screenHeight) / 2}
							/>
							<Text style={styles.qrText}>PLEASE PRESENT THIS TO YOUR DONOR</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
