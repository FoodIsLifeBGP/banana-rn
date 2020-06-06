import React, { Fragment } from 'react';
import { Text } from 'react-native';
import EndOfScrollWrapper from './EndOfScrollWrapper';
import Checkbox from '../Checkbox/Checkbox';

interface ScrollContainerProps {
	onScrollToEnd?: Function;
	onPress?: Function;
	setChecked: Function;
	documentText: string;
	checked: boolean;
	checkboxSize?: number;
	displayCheckbox?: boolean;
	checkboxLabel?: string;
	styleContainer?: any;
	styleDocumentText?: any;
	styleCheckboxLabel?: any;
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
	styleContainer,
	styleDocumentText,
	styleCheckboxLabel,
}: ScrollContainerProps) {

	return (
		<EndOfScrollWrapper onScrollToEnd={onScrollToEnd} style={styleContainer}>
			<Text style={styleDocumentText}>{documentText}</Text>
			{ displayCheckbox &&
				<Fragment>
					<Checkbox
						checked={checked}
						setChecked={setChecked}
						size={checkboxSize}
						onPress={onPress}
					/>
					<Text style={styleCheckboxLabel}>{checkboxLabel}</Text>
				</Fragment>
			}
		</EndOfScrollWrapper>
	);
}

