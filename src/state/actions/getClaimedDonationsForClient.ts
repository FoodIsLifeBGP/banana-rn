import { User } from '@state/index.types';
import railsAxios from '@util/railsAxios';

export const getClaimedDonationsForClient = async (jwt: string, user: User) => {
  const endpoint = `/clients/${user.id}/get_claims?client_lat=${user.coords.latitude}&client_long=${user.coords.longitude}`;

  try {
    const { data, status, statusText } = await railsAxios(jwt).get(endpoint);
    const sortedDonations = data.sort((a, b) => a.created_at < b.created_at);

    return {
      claimedDonationsForClient: sortedDonations,
      responseStatus: {
        code: status,
        message: statusText,
      },
    };
  } catch (error: any) {
    return {
      responseStatus: {
        code: error.status,
        message: error.error,
      },
    };
  }
};

export default getClaimedDonationsForClient;
