import React from 'react';
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { ColorPaletteName, useScheme } from '@util/colorSchemes';
import { ScrollView } from 'react-native-gesture-handler';
import styles, { DEFAULT_TOP_OFFSET } from './Modal.styles';

interface ModalProps {
  /** Title text shown in the header. */
  title: string; //

  /** Whether the modal is open. */
  open: boolean;

  /** Styling of the modal root. */
  style?: StyleProp<ViewStyle>;

  /** Top offset for the modal relative to its parent. */
  top?: number; //

  /** The color theme for the modal. */
  palette?: ColorPaletteName; //

  /** Callback for when the user taps outside of the modal container. */
  onDismiss: Function; //

  /** Body content of the modal. */
  children: React.JSX.Element | Array<React.JSX.Element>;
}

export default function Modal({
  title,
  open,
  style = {},
  top = DEFAULT_TOP_OFFSET,
  palette = 'secondary',
  onDismiss,
  children,
}: ModalProps) {
  const scheme = useScheme();
  const colorPalette = scheme[palette];

  const handleUnderlayPress = () => {
    if (open) {
      onDismiss();
    }
  };

  // NOTE : null is returned here since using "display: none" does not work properly for android devices
  if (!open) return null;

  return (
    <View style={[ style, styles.wrapper ]}>
      <TouchableOpacity
        style={styles.underlay}
        onPress={handleUnderlayPress}
      />

      <View style={[ styles.container, { top } ]}>
        <View
          style={[
            styles.header,
            { backgroundColor: colorPalette.background },
          ]}
        >
          <Text
            style={[ styles.title, { color: colorPalette.foreground } ]}
          >
            {title.toUpperCase()}
          </Text>
        </View>

        <View style={styles.body}>
          <ScrollView contentContainerStyle={styles.bodyContent}>
            {children}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
