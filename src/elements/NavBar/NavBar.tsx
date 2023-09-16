import React from 'react';
// import { useNavigation } from 'react-navigation-hooks';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { Icon } from '@elements/Icon';
import { Button, ButtonStyle } from '@elements/Button';
import * as colors from '@util/colors';
import Selector from '@elements/NavBar/Selector';
import useGlobal from '@state';
import { NAVBAR_ICON_SIZE } from '@util/constants';
import HamburgerPopupMenu from '../HamburgerPopupMenu';
import styles from './NavBar.styles';

interface NavBarProps {
	backDestination?: string;
	showMenu?: boolean;
	showBackButton?: boolean;
	leftButton?: 'qrCode'|'back';
	showSelector?: boolean;
	position?: 'map'|'list';
	onMap?: () => any | undefined;
	onList?: () => any | undefined;
	backButtonFn?: () => void;
}

export default function ({
	showMenu = true,
	showBackButton = true,
	leftButton = 'back',
	backDestination,
	showSelector,
	position,
	onMap,
	onList,
	backButtonFn,

}: NavBarProps) {
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
					leftButton === 'back' && showBackButton && (
						<Button
							buttonStyle={buttonStyle}
							onPress={backButtonFn || (backDestination ? () => navigate(backDestination) : () => goBack())}
						>
							{foregroundColor => (<Icon size={NAVBAR_ICON_SIZE} color={foregroundColor} name="back" />)}
						</Button>
					)
				}
				{
					leftButton === 'qrCode' && (
						<Button
							buttonStyle={buttonStyle}
							onPress={() => navigate('QRCodeScannerScreen')}
						>
							{foregroundColor => (<Icon size={NAVBAR_ICON_SIZE} color={foregroundColor} name="qrCode" />)}
						</Button>
					)
				}
			</View>
			{
				showSelector && position && <Selector position={position} onMap={onMap} onList={onList} />
			}
			<View style={styles.notiContainer}>
				<Button
					buttonStyle={buttonStyle}
					style={{ marginTop: 4, marginRight: 8 }}
					onPress={() => { updateAlert({ type: 'coming soon', dismissable: false }); }}
				>
					{foregroundColor => (<Icon size={NAVBAR_ICON_SIZE} color={foregroundColor} name="bell" />)}
				</Button>
				{showMenu && (<HamburgerPopupMenu />) }
			</View>
		</View>
	);
}
