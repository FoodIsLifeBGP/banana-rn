import { Alert } from '@state/index.types';
import { ResponseStatus } from '../index.types';

export const updateAlert = (alert: Alert) => ({ alert });

export const clearAlert = () => ({ alert: undefined });

export const setResponseStatus = (responseStatus: ResponseStatus) => ({ responseStatus });
