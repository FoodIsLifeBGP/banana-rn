import React from 'react';
import { View } from 'react-native';

interface Spacer {
  height?: number | string;
  width?: number | string;
}

export default function SpacerInline({ height, width }: Spacer) {
  return (
    <View
      style={{
        height,
        width,
      }}
    />
  );
}
