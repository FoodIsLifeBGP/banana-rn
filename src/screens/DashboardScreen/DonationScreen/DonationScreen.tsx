import React, { useState } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	Alert, KeyboardAvoidingView, ScrollView,
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './DonationScreen.styles';

export default () => {
	const [ state, actions ] = useGlobal() as any;
	const { user, jwt } = state;
	const [ newDonation, setNewDonation ] = useState<NewDonation>({} as NewDonation);
	const { postDonation, logOut, getDonationsOrClaims } = actions;
	const { navigate } = useNavigation();

	return (
		<View>
			<NavBar showBackButton={true} />
			<SpacerInline height={20} />
			<Title text="Donate Food (Replace w/ Image)" />
			<KeyboardAwareScrollView
				resetScrollToCoords={{ x: 0, y: 0 }}
				contentContainerStyle={styles.keyboardAvoidContainer}
				scrollEnabled={true}
			>


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

				<View>
					<LinkButton
						text="Publish"
						onPress={() => console.log('Pressed')}
					/>
				</View>

			</KeyboardAwareScrollView>
		</View>

	);
};
