import { User } from '@state/index.types';
import railsAxios from '@util/railsAxios';

export const getActiveDonationsForClient = async (jwt: string, user: User) => {
  const endpoint = `/donations/active?client_lat=${user.coords.latitude}&client_long=${user.coords.longitude}`;

  try {
    const { data, request } = await railsAxios(jwt).get(endpoint);

    const sortedData = data.sort((a, b) => a.created_at < b.created_at);
    const sortedActiveDonations = sortedData.filter(donation => donation.status === 'active');

    return {
      activeDonationsForClient: sortedActiveDonations,
      responseStatus: request.status,
    };
  } catch (error: any) {
    return {
      responseStatus: {
        code: error.response.status,
        message: error.response.statusText,
      },
    };
  }
};

export default getActiveDonationsForClient;
