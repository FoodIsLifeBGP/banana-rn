import React from 'react';
import { View } from 'react-native';
import { Title, SpacerInline, NavBar } from '@elements';
import Terms from '@assets/documents/SampleToS';
import ScrollContainer from '../../elements/ScrollContainer/ScrollContainer';
import styles from './TermsScreen.styles';

export default () => (
	<View style={styles.outerContainer}>
		<NavBar showMenu={false} />
		<Title text="Terms and conditions" />
		<SpacerInline height={20} />
		<ScrollContainer
			documentText={Terms}
			displayCheckbox={true}
			setChecked={() => {}}
			checked={false}
			checkboxLabel="I agree to the Terms & Conditions"
		/>
		<SpacerInline height={80} />
	</View>
);
