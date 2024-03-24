import Constants from 'expo-constants';

const DONOR = {
  LOGIN_URL: '/donor_auth',
  CREATE_URL: '/donors/create',
};

const CLIENT = {
  LOGIN_URL: '/client_auth',
  CREATE_URL: '/clients/create',
};

const getServerEndPoint = () => {
  if (Constants.manifest && Constants.manifest.extra) {
    if (Constants.manifest.extra.productionBuild) {
      return 'https://api.bananaapp.org';
    }
    return Constants.manifest.extra.ipAddress
      ? `http://${Constants.manifest.extra.ipAddress}:3000`
      : 'https://dev.bananaapp.org';
  }
  return 'https://dev.bananaapp.org';
};

const getEnv = () => {
  let variant;

  if (Constants.manifest && Constants.manifest.extra) {
    variant = Constants.manifest.extra.variant;
  }
  const variantSpecificProperties = variant === 'donor' ? DONOR : CLIENT;

  return {
    ...variantSpecificProperties,
    USER_IDENTITY: variant,
    API_BASE_URL: getServerEndPoint(),
  };
};

export default getEnv;
