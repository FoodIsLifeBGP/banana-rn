import React from 'react';
import {useNavigationParam} from 'react-navigation-hooks';
import {Dimensions, Image, ScrollView, Text, View,} from 'react-native';
import {Icon, SpacerInline, TextButton,} from '@elements';
import QRCode from 'react-native-qrcode-svg';
import * as colors from '@util/colors';
import typography from '@util/typography';
import {ButtonStyle} from '@elements/Button';
import styles from './ClaimDetailsScreen.styles';

const ClaimDetailsScreen = () => {
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

	return (

		<View style={styles.outerContainer}>
			<ScrollView>
				<View>
					<Image source={require('@assets/images/bananas.jpg')} style={styles.header} />
				</View>
				<View style={styles.mainContent}>
					<View style={styles.section}>
						<View style={[ styles.title, { flexDirection: 'row' } ]}>
							<View><Text style={typography.h3}>{donation.food_name}</Text></View>
							<SpacerInline width={10} />
							<View style={styles.claimedDonation}>
								<Text style={styles.claimedTag}>CLAIMED</Text>
							</View>
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
						<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
							<TextButton text="Directions" buttonStyle={claimBtnStyle} />
						</View>
					</View>
					<View>
						<View style={styles.title}>
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


export default ClaimDetailsScreen;
