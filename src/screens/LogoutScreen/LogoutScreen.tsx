import { Paragraph } from '@elements/Paragraph';
import React from 'react';
import InfoScreen from '../InfoScreen';

export default () => (
  <InfoScreen
    title='You are logged out.'
    nextScreenTitle='Log In'
    nextScreenDestination='LoginScreen'
  >
    <Paragraph>We hope to see you soon!</Paragraph>
  </InfoScreen>
);
