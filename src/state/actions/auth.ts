import railsAxios from '@util/railsAxios';
import { GlobalState } from '@state/index';
// import { AxiosError } from "axios";

export const logIn = async (loginUrl: string, userIdentity: string, email: string, password: string): Promise<Partial<GlobalState>> => {
  try {
    const { data, status, statusText } = await railsAxios().post(
      loginUrl,
      JSON.stringify({
        [userIdentity]: {
          email,
          password,
        },
      }),
    );

    return {
      jwt: data?.jwt || '',
      user: data?.[userIdentity] || '',
      responseStatus: {
        code: status,
        message: statusText,
      } /* TODO: define return types/methods for axios */,
    };
  /* TODO: add type for error below maybe AxiosError<any> */
  } catch (error: any) {
    return {
      jwt: '',
      user: undefined,
      responseStatus: {
        // title: error.response.statusText,
        code: error.response.status,
        message: error.response.data.message,
      },
    };
  }
};
