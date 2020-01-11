import React, { useState } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	Alert,
	AlertIOS
} from 'react-native';
import { Switch } from 'react-native-paper';
import useGlobal from '@state';
import {
	Header,
	SpacerInline,
	FormTextInput,
	LinkButton,
	InputLabel,
} from '@elements';
import * as colors from '@util/colors';
import styles from './ClaimScreen.styles';

export default () => {
	const icon = require('@assets/images/banana-icon.png');

	// Dummy Data
	const DATA = {
		foodName:"Banana",
		servings:14,
		distance:10,
		provider:"Foods 4 U",
		timer:'45',
		address:"1500 NE 24th Ave"
	}

	return (
		<View style={styles.outerContainer}>
			<Header showMenu={false}></Header>
			<SpacerInline height={20} />
			<View style={styles.detailTop}>
				<Text style={styles.heading}>Donation Details</Text>
				<View style={styles.iconContainer}>
					<View style={styles.iconMask}>
						<Image source={icon} style={styles.icon} />
					</View>
				</View>
				<Text style={styles.H3}>{DATA.foodName}</Text>
				<Text style={styles.H3}>{DATA.provider}</Text>
				<View style={{justifyContent:'center'}}>
					<Text style={styles.text}>{`${DATA.servings} Servings Left - ${DATA.distance} Mi`}</Text>
					<Text style={styles.H3}>{`${DATA.timer} Minutes`}</Text>
				</View>
			</View>
			<View style={styles.detailBot}>
				<Text style={styles.H3}>Pick Up Address/Instructions</Text>
				<Text style={styles.text}>{DATA.address}</Text>
				<SpacerInline height={50} />
				<LinkButton text="CLAIM" onPress={() => {
					Alert.alert(
						'Success',
						"You've claimed this donation",
						[
						  {text: 'OK', onPress: () => console.log('OK Pressed')},
						],
						{cancelable: false},
					  );
				}} />
			</View>
		</View>
	);
};
