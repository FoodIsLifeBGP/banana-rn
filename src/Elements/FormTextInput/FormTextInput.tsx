import React from 'react';
import { View, TextInput } from 'react-native';
import InputLabel from './InputLabel';
import styles from './FormTextInput.styles';

export default ({
	text,
	value,
	setValue,
	width = '100%',
	autoCapitalize = 'none',
}: {
	text: string;
	value: any;
	setValue: any;
	width?: number | string;
	autoCapitalize?: 'words' | 'sentences' | 'none';
}) => {
		return (
		<View style={{ ...styles.container, width }}>
			<InputLabel text={text} />
			<TextInput 
				value={value}
				onChangeText={setValue}
				style={styles.input}
				autoCapitalize={autoCapitalize}
			/>
		</View>
	);
};
