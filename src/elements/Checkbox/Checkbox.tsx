import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@elements';
import { NAVY_BLUE } from '@util/colors';

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
		<TouchableOpacity
			disabled={disabled}
			onPress={() => { setCheck(!checked); }}
		>
			<Icon
				name={checked ? 'arrowDown' : 'arrowUp'}
				color={NAVY_BLUE}
				size={size}
			/>
		</TouchableOpacity>
	);
}
