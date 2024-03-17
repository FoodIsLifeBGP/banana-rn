import railsAxios from '@util/railsAxios';

interface ResetPasswordPropsBase {
	onComplete: () => void;
	input: string;
	setIsSubmitting: (value: boolean) => void;
	setError: (value: string) => void;
}

export type RequestResetTokenProps = ResetPasswordPropsBase;

export const requestResetToken = async (store, {
	onComplete, input, setIsSubmitting, setError,
}: RequestResetTokenProps) => {
	const { userIdentity } = store.state;
	const endpoint = '/password/reset';

	const payload = {
		[userIdentity]: {
			email: input,
		},
	};
	try {
		await railsAxios().post(endpoint, payload);
		setIsSubmitting(false);
		onComplete();
	} catch (e: any) {
		setError(e.response ? e.response.data.message : "We're sorry, but there was an error.  Please try again.");
	} finally {
		setIsSubmitting(false);
	}
};

export interface SubmitNewPasswordProps extends ResetPasswordPropsBase {
	token: string;
}

export const submitNewPassword = async (store, {
	input,
	token,
	setIsSubmitting,
	onComplete,
	setError,
}: SubmitNewPasswordProps) => {
	const { userIdentity } = store.state;
	const endpoint = '/password/reset';

	const payload = {
		[userIdentity]: {
			token,
			password: input,
		},
	};

	try {
		const response = await railsAxios().patch(endpoint, payload);
		setIsSubmitting(false);
		onComplete();
		// TODO: perhaps we should do something with the response?
		console.log(response.data);
	} catch (e: any) {
		setError(e.response ? e.response.data.message : "We're sorry, but there was an error. Please try again.");
		setIsSubmitting(false);
	}
};
