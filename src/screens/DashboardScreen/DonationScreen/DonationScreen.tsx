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
import donationConstraints from '@util/constraints/donation';
import styles from './DonationScreen.styles';

export default () => {
	const [ state, actions ] = useGlobal() as any;
	const { user, jwt } = state;
	const [ newDonation, setNewDonation ] = useState<NewDonation>({} as NewDonation);
	const [ validateError, setValidateError ] = useState({} as any);
	const { postDonation, logOut, getDonationsOrClaims } = actions;
	const { navigate } = useNavigation();

	const foodCategories: Array<string> = ['Bread', 'Dairy', 'Hot Meal', 'Produce', 'Protein', 'Others'];
	newDonation.pickupAddress = `${user.address_street} ${user.address_city}, ${user.address_state} ${user.address_zip}`;
	newDonation.pickupInstructions = user.pickup_instructions;

	const validateInputs = async () => {
		const validateResults = validate(newDonation, donationConstraints);
		if (validateResults) {
			setValidateError(validateResults);
		} else {
			setValidateError({});
			await postDonation(newDonation);
		}
	};
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
					value={newDonation.itemName}
					setValue={s => setNewDonation({ ...newDonation, itemName: s })}
					style={styles.input}
					error={validateError.itemName}
					errorMessage={validateError.itemName}
					autoFocus={true}
				/>

				<InputLabel text="Food Category" />
				<View style={styles.input}>
					<DropdownInput
						value={newDonation.category}
						setValue={s => setNewDonation({ ...newDonation, category: s })}
						dropdownData={foodCategories}
					/>
				</View>

				<FormTextInput
					label="Total Amount"
					value={newDonation.totalAmount}
					setValue={s => setNewDonation({ ...newDonation, totalAmount: s })}
					style={styles.input}
					error={validateError.totalAmount}
					errorMessage={validateError.totalAmount}
				/>

				<FormTextInput
					label="Pickup Address"
					value={newDonation.pickupAddress}
					setValue={s => setNewDonation({ ...newDonation, pickupAddress: s })}
					style={styles.input}
					editable={false}
				/>

				<FormTextInput
					label="Pickup Instructions"
					value={newDonation.pickupInstructions}
					setValue={s => setNewDonation({ ...newDonation, pickupInstructions: s })}
					style={styles.input}
					error={validateError.pickupInstructions}
					errorMessage={validateError.pickupInstructions}
				/>

				<View style={{ marginBottom: '10' }}>
					<LinkButton
						text="Publish"
						onPress={validateInputs}
					/>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>

	);
};
