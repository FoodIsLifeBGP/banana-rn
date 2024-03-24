import railsAxios from '@util/railsAxios';
import { User } from '@state/index.types';

export const getDonationHistory = async (jwt: string, user: User) => {
  const endpoint = `/donations/${user.id}/history_donations`;

  try {
    const response = await railsAxios(jwt).get(endpoint);
    const { data, status, statusText } = response;

    return {
      donationHistory: data.closed_donations_in_db,
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
