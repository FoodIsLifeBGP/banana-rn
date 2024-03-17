import React from 'react';
import { View } from 'react-native';
// import { Button } from "@elements";
import { Button, Icon } from '@elements';
import { ButtonStyle } from '@elements/Button';
import * as colors from '@util/constants/colors';
import Selector from '@elements/NavBar/Selector';
import useGlobal from '@state';
import { NAVBAR_ICON_SIZE } from '@util/constants/icons';
import HamburgerPopupMenu from '@elements/HamburgerPopupMenu';
import styles from './NavBar.styles';

interface NavBarProps {
	backDestination?: string;
	showMenu?: boolean;
	showBackButton?: boolean;
	leftButton?: 'qrCode' | 'back';
	showSelector?: boolean;
	position?: 'map' | 'list';
	onMap?: () => any;
	onList?: () => any;
	backButtonFn?: () => void;
	navigation?: any;
	goBack: () => void;
}

export default function NavBar({
	showMenu = true,
	showBackButton = true,
	leftButton = 'back',
	backDestination,
	showSelector,
	position,
	onMap,
	onList,
	backButtonFn,
	navigation,
	goBack,
}: NavBarProps) {
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
				{leftButton === 'back' && showBackButton && (
					<Button
						buttonStyle={buttonStyle}
						onPress={
							backButtonFn
              || (backDestination
              	? () => navigation.navigate(backDestination)
              	: () => goBack())
						}
						children={foregroundColor => <Icon size={NAVBAR_ICON_SIZE} color={foregroundColor} name="back" />}
					/>
				)}
				{leftButton === 'qrCode' && (
					<Button
						buttonStyle={buttonStyle}
						onPress={() => navigation.navigate('QRCodeScannerScreen')}
						children={foregroundColor => <Icon size={NAVBAR_ICON_SIZE} color={foregroundColor} name="qrCode" />}
					/>
				)}
			</View>
			{showSelector && position && (
				<Selector position={position} onMap={onMap} onList={onList} />
			)}
			<View style={styles.notificationContainer}>
				<Button
					buttonStyle={buttonStyle}
					style={{
						marginTop: 4,
						marginRight: 8,
					}}
					onPress={() => {
						updateAlert({
							title: 'Coming Soon',
							type: 'coming soon',
							message: 'coming soon',
							dismissible: false,
						});
					}}
					children={foregroundColor => <Icon size={NAVBAR_ICON_SIZE} color={foregroundColor} name="bell" />}
				/>
				{showMenu && <HamburgerPopupMenu />}
			</View>
		</View>
	);
}
