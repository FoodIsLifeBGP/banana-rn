import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { Title, LinkButton, SpacerInline, Header } from '../../elements';
import styles from './InfoScreen.styles';

type InfoScreenProps = {
	title: string,
	nextScreenTitle?: string,
	nextScreenDestination?: string,
	backDestination?: string,
}

const InfoScreen: FunctionComponent<InfoScreenProps> = ({
	title,
	nextScreenTitle,
	nextScreenDestination,
	backDestination,
	children,
}) => (
	<View style={styles.outerContainer}>
		<View>
			<Header showMenu={false} backDestination={backDestination} />
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
