import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
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
	const isDisabled = () => {
		if (disabled) {
			return (
				<CheckBox
					Component={TouchableWithoutFeedback}
					checked={checked}
					size={size}
				/>
			);
		}
		return (
			<CheckBox
				checked={checked}
				onPress={() => setCheck}
				size={size}
			/>
		);
	};

	return (
		<View>
			{isDisabled()}
		</View>
	);
}
