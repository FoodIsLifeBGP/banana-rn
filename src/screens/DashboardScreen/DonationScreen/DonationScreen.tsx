import React, { useRef, useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import {
	View,
	KeyboardAvoidingView,
	ScrollView,
	Platform,
	TextInput,
} from 'react-native';
import useGlobal from '@state';
import {
	NavBar,
	SpacerInline,
	FormTextInput,
	LinkButton, FormImageInput,
} from '@elements';
import validate from 'validate.js';
import { NewDonation } from '@screens/DashboardScreen/DonationScreen/DonationScreen.type';
import donationConstraints from '@util/constraints/donation';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';
import styles from './DonationScreen.styles';

export default () => {
	const [state, actions] = useGlobal() as any;
	const { user } = state;
	const [newDonation, setNewDonation] = useState<NewDonation>({ pickupInstructions: user.pickup_instructions } as NewDonation);
	const [validateError, setValidateError] = useState({} as any);
	const [image, setImage] = useState({} as ImageInfo);
	const { postDonation } = actions;
	const { navigate } = useNavigation();

	const totalAmountRef = useRef<TextInput>(null);
	const pickupInstructionRef = useRef<TextInput>(null);


	const foodCategories: Array<string> = ['Bread', 'Dairy', 'Hot Meal', 'Produce', 'Protein', 'Others'];
	newDonation.pickupAddress = `${user.address_street} ${user.address_city}, ${user.address_state} ${user.address_zip}`;

	const validateInputs = async () => {
		const validateResults = validate(newDonation, donationConstraints);
		if (validateResults) {
			setValidateError(validateResults);
		} else {
			setValidateError({});
			const result = await postDonation(newDonation);
			if (result === 201) {
				navigate('DashboardScreen');
			} else {
				// TODO: communicate failures better
				console.log('There was a problem creating the donation');
			}
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
				<View style={styles.imageInputContainer}>
					<FormImageInput
						label=""
						value={image}
						setValue={setImage}
						status={image?.uri ? 'success' : undefined}
						shape="circular"
					/>
				</View>

				<SpacerInline height={20} />
				<FormTextInput
					label="Item Name"
					value={newDonation.itemName}
					setValue={s => setNewDonation({ ...newDonation, itemName: s })}
					style={styles.input}
					error={validateError.itemName}
					errorMessage={validateError.itemName}
					autoFocus={true}
					onSubmitEditing={() => totalAmountRef?.current?.focus()}
				/>

				<FormTextInput
					label="Food Category"
					dropdownData={foodCategories}
					setValue={s => setNewDonation({ ...newDonation, category: s })}
					value={newDonation.category}
					type="dropdown"
					error={!!validateError.category}
					errorMessage={validateError.category}
					placeholder="Select one"
				/>

				<FormTextInput
					label="Total Amount"
					value={newDonation.totalAmount}
					setValue={s => setNewDonation({ ...newDonation, totalAmount: s })}
					style={styles.input}
					error={validateError.totalAmount}
					errorMessage={validateError.totalAmount}
					keyboardType={'numeric'}
					ref={totalAmountRef}
					//autoFocus={true}
					onSubmitEditing={() => pickupInstructionRef?.current?.focus()}
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
					ref={pickupInstructionRef}
				//autoFocus={true}
				/>

				<View style={styles.button}>
					<LinkButton
						text="Publish"
						onPress={validateInputs}
					/>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>

	);
};
