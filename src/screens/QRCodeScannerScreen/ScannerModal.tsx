import React from 'react';
import {
  Image, Text, View,
} from 'react-native';
import {
  Icon, Modal, TextButton,
} from '@elements';
import { ButtonStyle } from '@elements/Button';
import { NAVY_BLUE, WHITE } from '@util/constants/colors';
import { formatDate, formatTime } from '@util/dateFormatter';
import styles from './QRCodeScannerScreen.styles';

const buttonStyle: ButtonStyle = {
  default: {
    background: NAVY_BLUE,
    foreground: WHITE,
  },
};

export default function scannerModal({
  claimedDonation,
  modalOn,
  handleDismiss,
  icon,
}) {
  let content;
  const today = new Date();

  if (claimedDonation && claimedDonation.food_name) {
    content = (
      <Modal
        title="ITEM DONATED"
        open={modalOn}
        onDismiss={handleDismiss}
        palette="secondary"
      >
        <View style={styles.content}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.claimTitle}>
            {claimedDonation.food_name}
          </Text>
          <View
            style={{
              ...styles.textContainer,
              marginBottom: -100,
            }}
          >
            <Icon name="user" color="blue" size={20} />
            <Text style={styles.textStyle}>
              {claimedDonation.claim.client_name}
            </Text>
          </View>
          <View
            style={{
              ...styles.textContainer,
              marginTop: 'auto',
              marginBottom: -80,
            }}
          >
            <Icon name="time" color="blue" size={20} />
            <Text style={styles.textStyle}>
              {formatTime(today)}
              {formatDate(today)}
            </Text>
          </View>
          <TextButton
            text="OK"
            textStyle={styles.buttonTextStyle}
            buttonStyle={buttonStyle}
            onPress={handleDismiss}
          />
        </View>
      </Modal>
    );
  } else {
    content = (
      <Modal
        title="SOMETHING WENT WRONG"
        open={modalOn}
        onDismiss={handleDismiss}
        palette="secondary"
      >
        <View style={styles.content}>
          <Image source={icon} style={styles.icon} />
          <Text
            style={{
              ...styles.textStyle,
              fontWeight: 'bold',
            }}
          >
            PLEASE TRY AGAIN
          </Text>
          <View
            style={{
              ...styles.errorContainer,
              marginVertical: 20,
            }}
          >
            <Text style={styles.errorStyle}>
              QR Code Scan was not successful.
            </Text>
            <Text style={styles.errorStyle}>
              If this issue is not resolved,
            </Text>
            <Text style={styles.errorStyle}>
              Please contact us.
            </Text>
          </View>
          <TextButton
            text="OK"
            textStyle={styles.buttonTextStyle}
            buttonStyle={buttonStyle}
            onPress={handleDismiss}
          />
        </View>
      </Modal>
    );
  }
  return content;
}
