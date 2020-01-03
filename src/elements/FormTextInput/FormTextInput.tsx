import React from 'react';
import { View, TextInput } from 'react-native';
import { InputLabel } from '@elements';
import styles from './FormTextInput.styles';

interface FormTextInputProps {
	text: string;
	value: any;
	setValue: any;
	width?: number | string;
	autoCapitalize?: 'words' | 'sentences' | 'none' | 'characters';
	inline?: boolean;
	upperCase?: boolean;
}

export default ({
	text,
	value,
	setValue,
	width = '100%',
	autoCapitalize = 'none',
	inline = false,
	upperCase = true,
}: FormTextInputProps) => (
	inline
		? (
			<View style={styles.inlineContainer}>
				<InputLabel text={text} upperCase={upperCase} />
				<View style={{ width: 8 }} />
				<View style={{ width, top: 5 }}>
					<TextInput
						value={value}
						onChangeText={setValue}
						style={{ ...styles.input, textAlign: 'right' }}
						autoCapitalize={autoCapitalize}
					/>
				</View>
			</View>
		)
		: (
			<View style={{ ...styles.container, width }}>
				<InputLabel text={text} upperCase={upperCase} />
				<TextInput
					value={value}
					onChangeText={setValue}
					style={styles.input}
					autoCapitalize={autoCapitalize}
				/>
			</View>
		)
);

