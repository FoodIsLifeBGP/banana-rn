import React, {useState} from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useGlobal from '@state';
import { Title, SpacerInline, Header } from '@elements';
import DonationsOrClaims from './DonationsOrClaims';
import styles from './DashboardScreen.styles';
import SegmentedControlIOS from "@react-native-community/segmented-control";

const DashboardScreen = () => {
	const { navigate } = useNavigation();
	const [ globalState ] = useGlobal();
	const { userIdentity } = globalState;
	const [segmentIndex, setSegmentIndex] = useState(0);
	const title = userIdentity === 'donor' ? 'My Donations.' : 'My Claims.';
	return userIdentity === 'donor' 
	// TO-DO: donar screen might need to update
	? (
		<View style={styles.outerContainer}>
			<View>
				<Header showBackButton={false} />
				<Title text={title} />
				<SpacerInline height={20} />
			</View>

			{ userIdentity === 'donor' && (
				<View style={styles.addButton}>
					<TouchableOpacity
						onPress={() => navigate('DonationScreen', {})}
					>
						<Text style={styles.plus}>
							+
						</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	)
	: (
		<View style={styles.outerContainer}>
			<View>
				<Header showBackButton={false} />
				<SegmentedControlIOS
							values={["Map", "List"]}
							selectedIndex={segmentIndex}
							onChange={(event)=>{
								setSegmentIndex(event.nativeEvent.selectedSegmentIndex);
							}}
				/>
				<SpacerInline height={20} />
			</View>
			{segmentIndex === 0 
				? (
					<View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
						<Text>Map goes here :)</Text>
					</View>
				)
				: (
					<DonationsOrClaims />
				)
			}
			
		</View>
	);
};

export default DashboardScreen;
