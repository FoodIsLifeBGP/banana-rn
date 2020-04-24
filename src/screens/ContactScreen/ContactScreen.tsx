import React from 'react';
import { Text } from 'react-native';
import { SpacerInline } from '@elements';
import InfoScreen from '../InfoScreen';
import styles from './ContactScreen.styles';

export default () => (
	<InfoScreen
		title="Contact."
	>
		<Text style={styles.documentText}>
			Please allow 24-48 hours for your registration to complete.
			The app will open when your application is processed.
		</Text>
		<SpacerInline height={25} />
		<Text style={styles.headingText}>
			CALL US
		</Text>
		<SpacerInline height={5} />
		<Text style={styles.documentText}>
			206-209-0555
		</Text>
		<SpacerInline height={25} />
		<Text style={styles.headingText}>
			EMAIL US
		</Text>
		<SpacerInline height={5} />
		<Text style={styles.documentText}>
			admin@thebananaapp.org
		</Text>
	</InfoScreen>
);
