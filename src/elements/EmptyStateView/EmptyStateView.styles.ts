import { StyleSheet } from 'react-native';
import * as colors from '@util/constants/colors';

export default StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: colors.LIGHT_YELLOW,
    padding: 40,
  },
  browser: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
});
