import { SpacerInline } from '@elements';
import { Paragraph } from '@elements/Paragraph';
import setAccountToActive from '@util/setAccountToActive';
import React from 'react';
import InfoScreen from '../InfoScreen';

export default ({ id }: { id: string }) => {
  setAccountToActive({ id });

  return (
    <InfoScreen
      title='Your application is approved!'
      nextScreenTitle='Start'
      nextScreenDestination='DashboardScreen'
    >
      <Paragraph>
        Welcome to the Banana App! We are so excited to have you join our
        family.
      </Paragraph>
      <SpacerInline height={40} />
      <Paragraph emphasized>
        CLICK "START" TO BEGIN YOUR FIRST DONATION!
      </Paragraph>
    </InfoScreen>
  );
};
