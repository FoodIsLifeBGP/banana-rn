import React from 'react';
import { Text, View } from 'react-native';
import styles from './InputLabel.styles';

export default function InputLabel({ text }: { text: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{text}</Text>
    </View>
  );
}
