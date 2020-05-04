import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { CheckBox } from 'react-native-elements';

interface CheckboxProps {
	checked: boolean;
	setCheck: Function;
	size?: number; // default = 18
	disabled?: boolean; // default = false
}

export default function Checkbox({
	checked,
	setCheck,
	size = 18,
	disabled = false,
}: CheckboxProps) {
	return (
		<CheckBox
			Component={disabled ? TouchableWithoutFeedback : TouchableOpacity}
			checked={checked}
			onPress={disabled ? () => null : setCheck}
			size={size}
		/>
	);
}
