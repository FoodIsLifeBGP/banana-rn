import {
	NavBar, LinkButton, SpacerInline, Title,
} from '@elements';
import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import styles from './InfoScreen.styles';

type InfoScreenProps = {
	title: string;
	nextScreenTitle?: string;
	nextScreenDestination?: string;
	backDestination?: string;
	showBackButton?: boolean;
};

const InfoScreen: FunctionComponent<InfoScreenProps> = ({
	title,
	nextScreenTitle,
	nextScreenDestination,
	backDestination,
	showBackButton,
	children,
}) => (
	<View style={styles.outerContainer}>
		<View>
			<NavBar showMenu={false} showBackButton={showBackButton} backDestination={backDestination} />
			<Title text={title} />
			<SpacerInline height={20} />
			<View>
				{children}
			</View>
		</View>

		<View>
			{ nextScreenTitle && nextScreenDestination && (
				<LinkButton text={nextScreenTitle} destination={nextScreenDestination} />
			)}
			<SpacerInline height={40} />
		</View>
	</View>
);

export default InfoScreen;
