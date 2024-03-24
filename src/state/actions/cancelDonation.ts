import railsAxios from '@util/railsAxios';

export const cancelDonation = async (jwt: string, donationId: number) => {
  const endpoint = `/donations/${donationId}/update`;

  const payload = {
    donation: {
      id: donationId,
      status: 'deleted',
    },
  };

  try {
    const { status, statusText, data } = await railsAxios(jwt).patch(endpoint, payload);

    return {
      code: status,
      message: statusText,
      donation: data.donation,
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

export default cancelDonation;
