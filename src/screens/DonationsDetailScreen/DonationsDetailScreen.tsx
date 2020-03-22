import React, { useState } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import {
	View, Text, Image, Dimensions, Alert, ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useGlobal from '@state';
import {
	Title, SpacerInline, Header, LinkButton,
} from '@elements';
import QRCode from 'react-native-qrcode-svg';
import * as colors from '@util/colors';
import { ClaimingProgressBar } from '@elements/ClaimingProgressBar';
import styles from './DonationsDetailScreen.styles';

const icon = require('@assets/images/banana-icon.png');


const DonationsDetailScreen = () => {
	const { navigate } = useNavigation();
	const [ globalState, globalActions ] = useGlobal() as any;
	const { userIdentity } = globalState;
	const donation = useNavigationParam('donation');
	const id = useNavigationParam('id');
	console.log(donation);
	const itemName = donation.food_name;
	const remainingNum = donation.total_servings;
	const bunchNum = 1;
	const distance = 0.3;
	const remainingMin = 30;
	const remainingSec = 30;
	const picupAddress = '15000 NE 24th street';
	const pickupInstructions = 'FRONTDESK';
	const claimedUserList = Array(4).fill(0).map((_, index) => ({ name: `bananaLover${index}` }));
	const screenWidth = Math.round(Dimensions.get('window').width);


	return (
		<View style={styles.outerContainer}>

			<View>
				<Header showBackButton={true} />
				<SpacerInline height={20} />
			</View>
			<View style={styles.contentContainer}>
				<Text style={[ styles.text, styles.textBold ]}>
					PRODUCE
				</Text>
				<View style={styles.iconContainer}>
					<Image source={icon} style={styles.icon} />
				</View>
				<Text style={[ styles.text, styles.textBold ]}>
					{itemName.toUpperCase()}
				</Text>
				<Text style={{ color: colors.NAVY_BLUE }}>
					{`${bunchNum} BUNCH · TOTAL ${remainingNum} SERVINGS` }
				</Text>
				<ClaimingProgressBar width={screenWidth * 0.5} left={9} reserved={1} pickedUp={0} />
				<Text style={styles.timeContainer}>
					<Text style={styles.timeBoard}>
						{`${remainingMin} MIN ${remainingSec} SEC`}
					</Text>
				</Text>
				<View style={styles.instructionsContainer}>
					<Text style={[ styles.marginSmall, styles.textBold, styles.text ]}>
						PICKUP ADDRESS
					</Text>
					<Text style={[ styles.marginSmall, styles.text ]}>
						{`${picupAddress}`}
					</Text>
					<Text style={[ styles.marginSmall, styles.textBold, styles.text ]}>
						PICKUP INSTRUCTIONS
					</Text>
					<Text style={[ styles.marginSmall, styles.text ]}>
						{`${pickupInstructions}`}
					</Text>
					<Text style={[ styles.marginSmall, styles.textBold, styles.text ]}>
                        CLAIMED USERS
					</Text>
					<ScrollView horizontal={true}>
						{
							claimedUserList.map(item => (
								<View>
									<View style={styles.iconContainer}>
										<Image source={icon} style={styles.icon} />
									</View>
									<Text style={styles.text}>{item.name}</Text>
								</View>
							))
						}
					</ScrollView>

				</View>
			</View>
			<LinkButton text="CANCEL DONATION" />
		</View>
	);
};

export default DonationsDetailScreen;
