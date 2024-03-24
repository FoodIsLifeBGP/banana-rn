import React from 'react';
import { Text, View } from 'react-native';
import useGlobalStore from '@state';
import { Modal, TextButton } from '@elements';
import { useScheme } from '@util/colorSchemes';
import typography from '@util/typography';
import styles from './CancelDonationModal.styles';

interface CancelDonationModalProps {
  onYes?: () => void;
  onNo?: () => void;
  okay?: () => void;
}

export default function CancelDonationModal({
  onYes = () => {},
  onNo = () => {},
  okay = () => {},
}: CancelDonationModalProps) {
  const clearAlert = useGlobalStore(state => state.clearAlert);
  const alert = useGlobalStore(state => state.alert);

  const scheme = useScheme();

  const handleNo = () => {
    clearAlert();
    onNo();
    alert && alert.cancelFn && alert.cancelFn();
  };

  const handleYes = () => {
    clearAlert();
    onYes();
    alert && alert.confirmFn && alert.confirmFn();
  };

  const handleCloseButtonPress = () => {
    clearAlert();
  };

  const handleDismiss = () => {
    if (alert && alert.dismissible) {
      clearAlert();
    }
  };

  const handleOkay = () => {
    clearAlert();
    okay();
    alert && alert.confirmFn && alert.confirmFn();
  };

  if (!alert) return null;
  if (!alert.type || alert.type === 'default') {
    return (
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
    );
  }
  if (alert.type === 'cancel donation') {
    return (
      <Modal
        style={styles.container}
        title={alert?.title || 'ARE YOU SURE?'}
        palette="secondary"
        open={alert !== undefined}
        onDismiss={handleDismiss}
      >
        <View style={styles.body}>
          <View style={styles.textContainer}>
            <Text style={typography.body1}>
              {alert?.message || 'This donation will be cancelled.'}
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
  if (alert.type === 'donation published') {
    return (
      <Modal
        style={styles.container}
        title={alert?.title || 'DONATION PUBLISHED'}
        palette="secondary"
        open={alert !== undefined}
        onDismiss={handleDismiss}
      >
        <View style={styles.body}>
          <View style={styles.textContainer}>
            <Text style={typography.body1}>
              {alert?.message
                || 'Donation was published successfully. Thanks for your participation.'}
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            <View style={styles.leftButton}>
              <TextButton
                text="OKAY"
                style={{ width: 120 }}
                buttonStyle={{
                  default: scheme.tertiary,
                  pressed: scheme.secondary,
                  disabled: scheme.disabled,
                }}
                onPress={handleOkay}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
  return null;
}
