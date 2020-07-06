import React, { useState } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	Alert, KeyboardAvoidingView, ScrollView, Platform,
} from 'react-native';
import { Switch } from 'react-native-paper';
import useGlobal from '@state';
import {
	NavBar,
	SpacerInline,
	FormTextInput,
	LinkButton,
	InputLabel, Title,
} from '@elements';
import validate from 'validate.js';
import { NewDonation } from '@screens/DashboardScreen/DonationScreen/DonationScreen.type';
import { DropdownInput } from '@elements/FormTextInput/DropdownInput';
import styles from './DonationScreen.styles';

export default () => {
	const [ state, actions ] = useGlobal() as any;
	const { user, jwt } = state;
	const [ newDonation, setNewDonation ] = useState<NewDonation>({} as NewDonation);
	const { postDonation, logOut, getDonationsOrClaims } = actions;
	const { navigate } = useNavigation();

	return (

		<KeyboardAvoidingView
			style={styles.keyboardAvoidContainer}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Android and iOS both interact with this prop differently
			enabled={true}
			keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
		>
			<NavBar showBackButton={true} />
			<ScrollView style={styles.scrollContainer}>
				<Title text="Donate Food (Replace w/ Image)" />


				<SpacerInline height={20} />
				<FormTextInput
					label="Item Name"
					value={newDonation.name}
					setValue={s => setNewDonation({ ...newDonation, name: s })}
					style={styles.input}
					error={false}
				/>

				<InputLabel text="Food Category" />
				<View style={styles.input}>
					<DropdownInput
						value={newDonation.category}
						setValue={s => setNewDonation({ ...newDonation, category: s })}
						dropdownData={[ 'Bread', 'Dairy', 'Hot Meal', 'Produce', 'Protein', 'Others' ]}
					/>
				</View>

				<FormTextInput
					label="Pickup Address"
					value={newDonation.pickupAddress}
					setValue={s => setNewDonation({ ...newDonation, pickupAddress: s })}
					style={styles.input}
					error={false}
				/>

				<FormTextInput
					label="Pickup Instructions"
					value={newDonation.pickupInstructions}
					setValue={s => setNewDonation({ ...newDonation, pickupInstructions: s })}
					style={styles.input}
					error={false}
				/>

				<View style={{ paddingBottom: '10%' }}>
					<LinkButton
						text="Publish"
						onPress={() => console.log('Pressed')}
					/>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>

	);
};
