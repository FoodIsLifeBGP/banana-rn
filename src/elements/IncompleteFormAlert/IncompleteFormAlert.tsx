import React from 'react';
import { Text, View } from 'react-native';
import useGlobalStore from '@state';
import { Modal, TextButton } from '@elements';
import { useScheme } from '@util/colorSchemes';
import typography from '@util/typography';
import styles from './IncompleteFormAlert.styles';

interface IncompleteFormAlertProps {
  onYes?: () => void;
  onNo?: () => void;
}

export default function IncompleteFormAlert({
  onYes = () => {},
  onNo = () => {},
}: IncompleteFormAlertProps) {
  const alertHandler = useGlobalStore(state => state.alert);
  const clearAlert = useGlobalStore(state => state.clearAlert);

  const scheme = useScheme();

  const handleNo = () => {
    clearAlert();
    onNo();
    alertHandler && alertHandler.cancelFn && alertHandler.cancelFn();
  };

  const handleYes = () => {
    clearAlert();
    onYes();
    alertHandler && alertHandler.confirmFn && alertHandler.confirmFn();
  };

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
  if (alertHandler.type === 'incomplete form') {
    return (
      <Modal
        style={styles.container}
        title={alertHandler?.title || 'ARE YOU SURE?'}
        palette="secondary"
        open={alertHandler !== undefined}
        onDismiss={handleDismiss}
      >
        <View style={styles.body}>
          <View style={styles.textContainer}>
            <Text style={typography.body1}>
              {alertHandler?.message || 'This is incomplete and will be canceled if you leave this page.'}
            </Text>
          </View>

          <View style={styles.buttonWrapper}>
            <View style={styles.leftButton}>
              <TextButton
                text="NO, KEEP IT"
                style={{ width: 120 }}
                buttonStyle={{
                  default: scheme.tertiary,
                  pressed: scheme.secondary,
                  disabled: scheme.disabled,
                }}
                onPress={handleNo}
              />
            </View>
            <View style={styles.rightButton}>
              <TextButton
                text="YES, CANCEL"
                style={{ width: 120 }}
                buttonStyle={{
                  default: scheme.primary,
                  pressed: scheme.secondary,
                  disabled: scheme.disabled,
                }}
                onPress={handleYes}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
  return null;
}
