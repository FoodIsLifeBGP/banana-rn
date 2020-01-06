import React from 'react';
import useGlobal from '@state';
import Donation from './Donation';
import Claim from './Claim';
// import { Donation as IDonation, Claim as IClaim } from './DonationOrClaim.type';

// TODO: I feel that the commented out code tells the function to cast donationOrClaim as a Donation or Claim, depending on which they are, since their respective components require strictly one or the other.  Typescript does not agree, so we have `any` for now.

// export default function DonationOrClaim<T extends IDonation | IClaim>(
// { donationOrClaim }: { donationOrClaim: T },
// ): T extends IDonation ? IDonation : IClaim {
export default ({ donationOrClaim }: { donationOrClaim: any }) => {
	const [ globalState ] = useGlobal();
	const { userIdentity } = globalState;

	return userIdentity === 'donor'
		? <Donation donation={donationOrClaim} />
		: <Claim claim={donationOrClaim} />;
};
