import { Alert } from '../index.types';

export const updateAlert = (store, alert: Alert) => {
	store.setState({ alert });
};

export const clearAlert = (store => {
	store.setState({ alert: undefined });
});
