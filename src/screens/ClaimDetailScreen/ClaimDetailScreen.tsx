import React, { useState } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import {
	View, Text, Image, Dimensions, Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useGlobal from '@state';
import { Title, SpacerInline, Header } from '@elements';
import QRCode from 'react-native-qrcode-svg';
import * as colors from '@util/colors';
import styles from './ClaimDetailScreen.styles';

const icon = require('@assets/images/banana-icon.png');


const ClaimDetailScreen = () => {
	const { navigate } = useNavigation();
	const [ globalState, globalActions ] = useGlobal() as any;
	const { userIdentity } = globalState;
	const claim = useNavigationParam('claim');
	const { qr_code } = claim;
	const itemName = 'banana';
	const remainingNum = 2;
	const distance = 0.3;
	const remainingMin = 30;
	const remainingSec = 30;
	const pickupInstructions = 'FRONTDESK';

	const screenHeight = Math.round(Dimensions.get('window').height);
	const screenWidth = Math.round(Dimensions.get('window').width);
	return (
		<View style={styles.outerContainer}>

			<View>
				<Header showBackButton={true} />
				<Title text="itemName" />
				<SpacerInline height={20} />
			</View>
			<View style={styles.contentContainer}>
				<Text style={styles.title}>
					{'PENDING\n  CLAIM'}
				</Text>
				<View style={styles.iconContainer}>
					<Image source={icon} style={styles.icon} />
				</View>
				<Text style={{ fontWeight: 'bold', color: colors.NAVY_BLUE }}>
					{itemName}
				</Text>
				<Text style={{ color: colors.NAVY_BLUE }}>
					{`${remainingNum} Servings · ${distance} MI`}
				</Text>
				<Text
					style={[
						styles.textBold,
						styles.textUnderline,
						styles.text,
					]}
				>
            See Location
				</Text>
				<Text style={styles.timeBoard}>
					{`${remainingMin} MIN ${remainingSec} SEC`}
				</Text>
				<Text style={[ styles.textBold, styles.text ]}>
					{`PICKUP INSTRUCTIONS:"${pickupInstructions}"`}
				</Text>
			</View>
			<View style={styles.QRCodeContainer}>
				<QRCode
					backgroundColor={colors.BANANA_YELLOW}
					value={qr_code}
					size={Math.min(screenWidth, screenHeight) / 3}
				/>
				<Text style={styles.text}>PLEASE PRESENT THIS TO YOUR DONOR</Text>
			</View>
		</View>
	);
};

export default ClaimDetailScreen;
