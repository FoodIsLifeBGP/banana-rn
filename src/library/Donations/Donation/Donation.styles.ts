import { StyleSheet } from 'react-native';
import * as colors from '@util/constants/colors';

const iconSize = 90;

export default StyleSheet.create({
  iconContainer: {
    height: iconSize,
    width: iconSize,
    borderRadius: iconSize / 2,
    backgroundColor: colors.BANANA_YELLOW,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 1,
  },
  icon: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  infoContainer: {
    height: 125,
    backgroundColor: colors.LIGHT_GRAY,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 15,
  },
  infoText: {
    fontFamily: 'open-sans-regular',
    color: colors.NAVY_BLUE,
  },
  infoTextBold: {
    fontFamily: 'open-sans-bold',
    color: colors.NAVY_BLUE,
  },
  infoTitle: {
    width: iconSize,
    textAlign: 'center',
    fontFamily: 'open-sans-bold',
    color: colors.NAVY_BLUE,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
