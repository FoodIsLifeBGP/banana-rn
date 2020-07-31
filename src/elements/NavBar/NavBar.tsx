import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Icon } from '@elements';
import { ButtonStyle } from '@elements/Button';
import * as colors from '@util/colors';
import Selector from '@elements/NavBar/Selector';
import useGlobal from '@state';
import HamburgerPopupMenu from '../HamburgerPopupMenu';
import styles from './NavBar.styles';

interface NavBarProps {
	backDestination?: string;
	preventBack?: boolean;
	prevBackMessage?: string;
	showMenu?: boolean;
	showBackButton?: boolean;
	leftButton?: 'qrCode'|'back';
	showSelector?: boolean;
	position?: 'map'|'list';
	onMap?: () => any;
	onList?: () => any;
}

export default ({
	showMenu = true,
	showBackButton = true,
	leftButton = 'back',
	backDestination,
	preventBack = false,
	prevBackMessage,
	showSelector,
	position,
	onMap,
	onList,

}: NavBarProps) => {
	const { navigate, goBack } = useNavigation();
	const buttonStyle: ButtonStyle = {
		default: {
			background: colors.LIGHT_GRAY,
			foreground: colors.NAVY_BLUE,
		},
	};
	const [ state, { updateAlert } ] = useGlobal() as any;

	return (
		<View style={styles.contentContainer}>
			<View style={styles.backContainer}>
				{
					leftButton === 'back' && showBackButton && preventBack && (
					<Button
						buttonStyle={buttonStyle}
						onPress={() => { updateAlert({ type: prevBackMessage, dismissable: false }); }}
					>
						{foregroundColor => (<Icon size={36} color={foregroundColor} name="back" />)}
					</Button>
				)
				}
				{
					leftButton === 'back' && showBackButton && !preventBack && (
						<Button
							buttonStyle={buttonStyle}
							onPress={backDestination ? () => navigate(backDestination) : () => goBack()}
						>
							{foregroundColor => (<Icon size={36} color={foregroundColor} name="back" />)}
						</Button>
					)
				}
				{
					leftButton === 'qrCode' && (
						<Button
							buttonStyle={buttonStyle}
							onPress={() => navigate('QRCodeScannerScreen')}
						>
							{foregroundColor => (<Icon size={36} color={foregroundColor} name="qrCode" />)}
						</Button>
					)
				}
			</View>
			{
				showSelector && position && onMap && onList && <Selector position={position} onMap={onMap} onList={onList} />
			}
			<View style={styles.notiContainer}>
				<Button
					buttonStyle={buttonStyle}
					style={{ marginTop: 4, marginRight: 8 }}
					onPress={() => { updateAlert({ type: 'coming soon', dismissable: false }); }}
				>
					{foregroundColor => (<Icon size={36} color={foregroundColor} name="bell" />)}
				</Button>
				{showMenu && (<HamburgerPopupMenu />) }
			</View>
		</View>
	);
};
