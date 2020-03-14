import { Paragraph } from '@elements/Paragraph';
import React from 'react';
import InfoScreen from '../InfoScreen';

export default () => (
  <InfoScreen
    title='Your account has been suspended.'
    nextScreenTitle='Learn More'
    nextScreenDestination='HelpScreen'
  >
    <Paragraph>
      We have temporarily suspended this account while we investigate. Thanks
      for your understanding.
    </Paragraph>
  </InfoScreen>
);
