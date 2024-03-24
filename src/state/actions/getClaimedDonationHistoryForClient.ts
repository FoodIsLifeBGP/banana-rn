import railsAxios from '@util/railsAxios';
import { User } from '@state/index.types';

export const getClaimedDonationHistoryForClient = async (jwt: string, user: User) => {
  const endpoint = `/clients/${user.id}/claims_history`;

  try {
    const { data, status, statusText } = await railsAxios(jwt).get(endpoint);

    return {
      claimedDonationHistoryForClient: data.closed_claims,
      responseStatus: {
        code: status,
        message: statusText,
      },
    };
  } catch (error: any) {
    console.log(error);
    return {
      claimedDonationHistoryForClient: [],
      responseStatus: {
        code: error.status,
        message: error.error,
      },
    };
  }
};

export default getClaimedDonationHistoryForClient;
