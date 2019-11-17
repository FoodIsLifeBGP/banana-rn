import React from 'react';
import { Button, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from 'react-navigation-hooks';
import Icon from '../Icon';
import styles from './Header.styles';

interface HeaderProps {
	backButtonText?: string;
	backDestination?: string;
	showBackButton?: boolean;
	showMenu?: boolean;
}

export default ({
	backButtonText = "Back",
	backDestination,
	showBackButton = true,
	showMenu = true,
}: HeaderProps) => {
	const { navigate, goBack } = useNavigation();

	return (
		<View>
			<View style={styles.contentContainer}>
				<View style={styles.backContainer}>
					{ showBackButton && (
						<TouchableOpacity
							onPress={() => backDestination ? navigate(backDestination) : goBack()}
							style={{ flexDirection: 'row', alignItems: 'center' }}
						>
							<Icon name="chevron-left" />
							<Text style={styles.backButtonLabel}>
								{backButtonText}
							</Text>
						</TouchableOpacity>
					)}
				</View>

				<View style={styles.menuContainer}>
					{ showMenu && (
							<TouchableOpacity
								onPress={() => {}}
							>
								<Icon name="menu" style={{fontSize: 65}} />
							</TouchableOpacity>
					)}
				</View>

			</View>
		</View>
	);
};
