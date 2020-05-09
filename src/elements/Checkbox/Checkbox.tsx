import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@elements';
import { NAVY_BLUE, LIGHT_GRAY_DISABLED } from '@util/colors';

interface CheckboxProps {
	checked: boolean;
	setChecked: Function;
	size?: number; // default = 18
	disabled?: boolean; // default = false
	onPress?: Function;
}

export default function Checkbox({
	checked,
	setChecked,
	size = 18,
	disabled = false,
	onPress = () => {},
}: CheckboxProps) {
	const handlePress = () => {
		setChecked(!checked);
		onPress();
	};

	return (
		<TouchableOpacity
			disabled={disabled}
			onPress={handlePress}
		>
			<Icon
				name={checked ? 'checkboxOn' : 'checkboxOff'}
				color={NAVY_BLUE}
				size={size}
			/>
		</TouchableOpacity>
	);
}
