import railsAxios from '@util/railsAxios';

export const getActiveDonationsFromDonor = async (jwt, user) => {
  const endpoint = `/donors/${user.id}/get_active_donations`;

  try {
    const { data: claimedAndActiveDonations, status, statusText } = await railsAxios(jwt).get(endpoint);

    return {
      activeDonationsFromDonor: claimedAndActiveDonations,
      responseStatus: {
        code: status,
        message: statusText,
      },
    };
  } catch (error: any) {
    console.log(error);
    return {
      responseStatus: {
        code: error.status,
        message: error.error,
      },
    };
  }
};
