import React from 'react';
import { View, Text } from 'react-native';
import { SpacerInline } from '@elements/SpacerInline';
import { TextButton } from '@elements/Button/TextButton';
import { useScheme } from '@util/colorSchemes';
import Modal from '../Modal';
import styles from './GeneralError.styles';

interface GeneralErrorProps {
	onDismiss?: () => void;
}

export default function GeneralError({
	onDismiss = () => {},
}: GeneralErrorProps) => {
	const scheme = useScheme();
	return (
		<Modal
			title="UH-OH!"
			open={true}
			onDismiss={() => onDismiss()}
			style={{ position: 'absolute' }}
		>
			<View>
				<Text style={styles.text}>Something went wrong.</Text>
				<Text style={styles.text}>Please try again later.</Text>
				<SpacerInline height={20} />
				<TextButton
					text="OK"
					buttonStyle={{
						default: scheme.primary,
						pressed: scheme.secondary,
						disabled: scheme.disabled,
					}}

				/>
			</View>
		</Modal>
	);
}
