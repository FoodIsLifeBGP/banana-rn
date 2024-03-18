import railsAxios from "@util/railsAxios";

export const scanQrCode = async (jwt: string, qrCode: string) => {
  try {
    const { status, statusText } = await railsAxios(jwt).post("/donors/scan", { qr_code: qrCode });

    return {
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
