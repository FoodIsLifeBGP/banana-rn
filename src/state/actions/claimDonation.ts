import railsAxios from '@util/railsAxios';

export const claimDonation = async (jwt: string, donationId: number, clientId: number) => {
  const endpoint = `/donations/${donationId}/claim`;
  const payload = { client_id: clientId };

  try {
    const { status, statusText, data } = await railsAxios(jwt).post(endpoint, payload);

    return {
      responseStatus: {
        code: status,
        message: statusText,
      },
      currentClaim: data.claim,
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

export default claimDonation;
