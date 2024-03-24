import React from 'react';
import { Text, View } from 'react-native';
import useGlobalStore from '@state';
import { Modal, TextButton } from '@elements';
import { useScheme } from '@util/colorSchemes';
import typography from '@util/typography';
import styles from './TheAlertModal.styles';

export default function TheAlertModal() {
  const alert = useGlobalStore(state => state.alert);
  const clearAlert = useGlobalStore(state => state.clearAlert);

  const scheme = useScheme();

  const handleCloseButtonPress = () => {
    clearAlert();
  };

  const handleDismiss = () => {
    if (alert && alert.dismissible) {
      clearAlert();
    }
  };

  return (
    (alert !== undefined)
      ? (
        <Modal
          style={styles.container}
          title={alert?.title || 'Alert'}
          palette="accent"
          open={alert !== undefined}
          onDismiss={handleDismiss}
        >
          <View style={styles.body}>
            <View style={styles.textContainer}>
              <Text style={typography.body1}>
                {alert?.message || 'Uh oh, an unknown error occurred!'}
              </Text>
            </View>

            <TextButton
              text="OK"
              style={{ width: 104 }}
              buttonStyle={{
                default: scheme.primary,
                pressed: scheme.secondary,
                disabled: scheme.disabled,
              }}
              onPress={handleCloseButtonPress}
            />
          </View>
        </Modal>
      )
      : null
  );
}
