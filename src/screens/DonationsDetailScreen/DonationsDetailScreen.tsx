import React, { useState } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import {
	View, Text, Image, Dimensions, Alert, ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useGlobal from '@state';
import {
	Title, SpacerInline, Header, LinkButton, Button,
} from '@elements';
import QRCode from 'react-native-qrcode-svg';
import * as colors from '@util/colors';
import { ClaimingProgressBar } from '@elements/ClaimingProgressBar';
import { ButtonStyle } from '@elements/Button';
import TimeBoard from './TimeBoard';
import styles from './DonationsDetailScreen.styles';

const icon = require('@assets/images/banana-icon.png');


const DonationsDetailScreen = () => {
	const { navigate } = useNavigation();
	const [ globalState, globalActions ] = useGlobal() as any;
	const { userIdentity } = globalState;
	// retrive data
	const donation = useNavigationParam('donation');
	const id = useNavigationParam('id');
	const itemName = donation.food_name;
	const remainingNum = donation.total_servings;
	// below are parameters that still missing in given data, substituted by hardcode
	const bunchNum = 1;
	const distance = 0.3;
	const remainingMin = 30;
	const remainingSec = 30;
	const picupAddress = '15000 NE 24th street';
	const pickupInstructions = 'FRONTDESK';
	// always ahead of current time by 45 mins
	const deadlinetime = new Date(Date.now() + 1000 * 60 * 45);
	const claimedUserList = Array(4).fill(0).map((_, index) => ({ name: `bananaLover${index}` }));
	const screenWidth = Math.round(Dimensions.get('window').width);
	const buttonStyle: ButtonStyle = {
		default: {
			background: colors.NAVY_BLUE,
			foreground: colors.WHITE,
		},
	};
	return (
		<ScrollView style={styles.outerContainer}>
			<View>
				<Header showBackButton={true} />
				<SpacerInline height={20} />
			</View>
			<View style={styles.contentContainer}>
				<Text style={[ styles.text, styles.textBold, styles.marginSmall ]}>
					PRODUCE
				</Text>
				<View style={styles.iconContainer}>
					<Image source={icon} style={styles.icon} />
				</View>
				<Text style={[ styles.text, styles.textBold, styles.marginSmall ]}>
					{itemName.toUpperCase()}
				</Text>
				<Text style={[ styles.text, styles.marginSmall ]}>
					{`${bunchNum} BUNCH · TOTAL ${remainingNum} SERVINGS` }
				</Text>

				<ClaimingProgressBar width={screenWidth * 0.9} left={9} reserved={5} pickedUp={4} />
				<TimeBoard deadline={deadlinetime} />
				<View style={styles.extensionContainer}>


					<Text style={[ styles.marginSmall, styles.textBold, styles.text ]}>
					TIME EXTENSION
					</Text>
					<View style={styles.extensionBtnContainer}>
						<Button
							buttonStyle={buttonStyle}
							// missing corresponding API
							onPress={() => alert('time extended')}
							style={{ width: '30%' }}
						>
							{
								foregroundColor => (
									<Text style={{ color: foregroundColor, fontWeight: 'bold' }}>
                                    15 MIN
									</Text>
								)
							}
						</Button>

						<Button
							buttonStyle={buttonStyle}
							// missing corresponding API
							onPress={() => alert('time extended')}
							style={{ width: '30%' }}
						>
							{
								foregroundColor => (
									<Text style={{ color: foregroundColor, fontWeight: 'bold' }}>
									30 MIN
									</Text>
								)
							}
						</Button>
					</View>
				</View>
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
						RESERVED FOR
					</Text>
					<ScrollView horizontal={true}>
						{
							claimedUserList.map(item => (
								<View style={styles.marginSmall}>
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
		</ScrollView>
	);
};

export default DonationsDetailScreen;
