import React from 'react';
import getEnv from '@util/environment';
import useGlobalHook from 'use-global-hook';
import { InitialState } from './index.types';

import * as actions from './actions';

const {
	USER_IDENTITY,
	API_BASE_URL,
	LOGIN_URL,
} = getEnv();

export const initialState: InitialState = {
	userIdentity: USER_IDENTITY,
	apiBaseUrl: API_BASE_URL,
	loginUrl: LOGIN_URL,
	jwt: undefined,
	user: undefined,
	donationsOrClaims: [],
};

// Paste the following into your code to use global state & actions:

// import useGlobal from '@state';
// const [ globalState, globalActions ] = useGlobal;

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
