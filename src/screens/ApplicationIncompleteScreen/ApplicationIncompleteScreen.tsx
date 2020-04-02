import { Paragraph } from '@elements';
import React from 'react';
import InfoScreen from '../InfoScreen';

export default () => (
  <InfoScreen
    title='Your account is incomplete. ):'
    nextScreenTitle='Contact Us'
    nextScreenDestination='ContactScreen'
  >
    <Paragraph>Looks like your application needs further review.</Paragraph>
    <Paragraph>
      Please expect to receive a call from us within 24-48 hours regarding your
      account.
    </Paragraph>
    <Paragraph>
      If you don't hear from us, please contact us via email.
    </Paragraph>
  </InfoScreen>
);
