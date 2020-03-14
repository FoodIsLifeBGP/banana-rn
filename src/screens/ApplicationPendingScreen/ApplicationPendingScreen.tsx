import { SpacerInline } from '@elements';
import { Paragraph } from '@elements/Paragraph';
import React from 'react';
import InfoScreen from '../InfoScreen';

export default () => (
  <InfoScreen
    title='Your application is being reviewed.'
    nextScreenTitle='Learn More'
    nextScreenDestination='ApplicationApprovedScreen'
  >
    <Paragraph>
      Please allow 24-48 hours for your registration to be reviewed. We will
      send you an email once the application has been processed.
    </Paragraph>
    <SpacerInline height={40} />
    <Paragraph emphasized>THANK YOU!</Paragraph>
  </InfoScreen>
);
