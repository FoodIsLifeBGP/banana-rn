import {
	StyleProp, TextInput, TextInputProps, TextStyle,
} from 'react-native';
import React, { Ref } from 'react';
import RNPickerSelect, { Item } from 'react-native-picker-select';
import { Icon } from '@elements';
import * as colors from '@util/colors';
import defaultStyle from './DropdownInput.styles';


interface DropdownInputProps extends TextInputProps {
	/** User-submitted value. */
	value: TextInputProps['value'];

	/** Callback used with every keystroke within the input. */
	setValue: TextInputProps['onChangeText'];

	/** Styling to override default input styling. */
	inputStyle?: StyleProp<TextStyle>;

	/** Reference to the text input for programmatic manipulation. */
	forwardedRef?: Ref<TextInput>;

	/** Dropdown data for dropdownList */
	dropdownData?: Array<string>;

}

const DropdownInput = (props: DropdownInputProps) => {
	const {
		style, value, setValue, dropdownData,
	} = props;
	const formattedData: Item[] = [];
	dropdownData?.forEach(item => formattedData.push({ label: item, value: item }));
	return (
		<RNPickerSelect
			style={
				{
					...defaultStyle,
					iconContainer: {
						top: 13,
						right: 2,
					},
					placeholder: {
						color: colors.NAVY_BLUE,
						fontSize: 16,
					},
				}

			}
			placeholder={{
				label: 'WA',
				value: 'WA',
				color: colors.NAVY_BLUE,

			}}
			value={value}
			onValueChange={v => {
				if (setValue) {
					setValue(v.toString());
				}
			}}
			items={formattedData}
			Icon={() => (
				<Icon color={colors.NAVY_BLUE} name="dropdown" size={18} />
			)}
		/>
	);
};
export default DropdownInput;
