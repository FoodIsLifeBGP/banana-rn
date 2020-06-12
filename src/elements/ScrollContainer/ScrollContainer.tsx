import React from 'react';
import { Text, View } from 'react-native';
import { SpacerInline } from '@elements/SpacerInline';
import EndOfScrollWrapper from './EndOfScrollWrapper';
import Checkbox from '../Checkbox/Checkbox';
import styles from './ScrollContainer.styles';

interface ScrollContainerProps {
	onScrollToEnd?: Function;
	onPress?: Function;
	setChecked: Function;
	documentText: string;
	checked: boolean;
	checkboxSize?: number;
	displayCheckbox?: boolean;
	checkboxLabel?: string;
}

export default function ScrollContainer({
	onScrollToEnd = () => {},
	onPress = () => {},
	setChecked,
	checkboxSize,
	documentText,
	displayCheckbox = true,
	checked,
	checkboxLabel,
}: ScrollContainerProps) {
	const handleDisplayCheckbox = () => {
		if (displayCheckbox) {
			return (
				<View style={styles.checkboxContainer}>
					<Checkbox
						checked={checked}
						setChecked={setChecked}
						size={checkboxSize}
						onPress={onPress}
					/>
					<Text style={styles.checkboxLabel}>{checkboxLabel}</Text>
				</View>
			);
		}
		return null;
	};

	return (
		<EndOfScrollWrapper onScrollToEnd={onScrollToEnd} style={styles.documentContainer}>
			<Text style={styles.documentText}>{documentText}</Text>
			{ handleDisplayCheckbox() }
			<SpacerInline height={100} />
		</EndOfScrollWrapper>
	);
}

