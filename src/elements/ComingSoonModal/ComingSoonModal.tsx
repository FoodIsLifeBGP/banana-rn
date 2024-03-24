import React from 'react';
import { Text, View } from 'react-native';
import useGlobalStore from '@state';
import {
  Icon, Modal, TextButton,
} from '@elements';
import { useScheme } from '@util/colorSchemes';
import typography from '@util/typography';
import styles from './ComingSoonModal.styles';

export default function ComingSoonModal() {
  const scheme = useScheme();

  const alertHandler = useGlobalStore(state => state.alert);
  const clearAlert = useGlobalStore(state => state.clearAlert);

  const handleCloseButtonPress = () => {
    clearAlert();
  };

  const handleDismiss = () => {
    if (alertHandler && alertHandler.dismissible) {
      clearAlert();
    }
  };

  if (!alertHandler) return null;
  if (!alertHandler.type || alertHandler.type === 'default') {
    return (
      <Modal
        style={styles.container}
        title={alertHandler?.title || 'Alert'}
        palette="accent"
        open={alertHandler !== undefined}
        onDismiss={handleDismiss}
      >
        <View style={styles.body}>
          <View style={styles.textContainer}>
            <Text style={typography.body1}>
              {alertHandler?.message
                || 'Uh oh, an unknown error occurred!'}
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
    );
  }
  if (alertHandler.type === 'coming soon') {
    return (
      <Modal
        style={styles.container}
        title={alertHandler?.title || 'COMING SOON!'}
        palette="secondary"
        open={alertHandler !== undefined}
        onDismiss={handleDismiss}
      >
        <View style={styles.body}>
          <Icon name="smile" size={75} />
          <View
            style={{
              padding: 5,
              flexGrow: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={typography.body1}>
              {alertHandler?.message
                || 'This feature will be available soon.'}
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
    );
  }
  return null;
}
