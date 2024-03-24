import railsAxios from '@util/railsAxios';

interface ResetPasswordPropsBase {
  onComplete: () => void;
  formInput: string;
  userIdentity: string;
  setIsSubmitting: (value: boolean) => void;
  setError: (value: string) => void;
}

export type RequestResetTokenProps = ResetPasswordPropsBase;

export const requestResetToken = async ({
  onComplete, userIdentity, formInput, setIsSubmitting, setError,
}: RequestResetTokenProps) => {
  const endpoint = `/password_resets/${userIdentity}/`;
  const email = JSON.stringify({ email: formInput });

  try {
    await railsAxios().post(endpoint, email);
    setIsSubmitting(false);
    onComplete();
  } catch (e: any) {
    setIsSubmitting(false);
    setError(e.response
      ? e.response.data.message
      : "We're sorry, but there was an error.  Please try again.");
  }
};

export interface SubmitResetTokenProps
  extends ResetPasswordPropsBase {
  setToken: (value: string) => void;
}

export const submitResetToken = async ({
  onComplete,
  formInput,
  userIdentity,
  setIsSubmitting,
  setError,
  setToken,
}: SubmitResetTokenProps) => {
  const endpoint = `/password_resets/${userIdentity}/${formInput}/`;
  try {
    await railsAxios().get(endpoint);
    setIsSubmitting(false);
    setToken(formInput);
    onComplete();
  } catch (e: any) {
    setIsSubmitting(false);
    setError(e.response
      ? e.response.data.message
      : "We're sorry, but there was an error.  Please try again.");
  }
};

export interface SubmitNewPasswordProps
  extends ResetPasswordPropsBase {
  token: string;
}

export const submitNewPassword = async ({
  formInput,
  userIdentity,
  token,
  setIsSubmitting,
  onComplete,
  setError,
}: SubmitNewPasswordProps) => {
  const password = JSON.stringify({ password: formInput });
  const endpoint = `/password_resets/${userIdentity}/${token}`;
  try {
    await railsAxios().patch(endpoint, password);
    setIsSubmitting(false);
    onComplete();
  } catch (e: any) {
    setIsSubmitting(false);
    setError(e.response
      ? e.response.data.message
      : "We're sorry, but there was an error.  Please try again.");
  }
};
