import { StyleSheet } from 'react-native';
import typography from '@util/typography';
import * as colors from '@util/constants/colors';

const ERROR_PADDING_HORIZONTAL = 10;

export default StyleSheet.create({
  text: {
    fontFamily: 'open-sans-light',
    fontSize: 18,
    marginBottom: 4,
    color: colors.NAVY_BLUE,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    aspectRatio: 2.25,
  },
  image: {
    width: '100%',
    aspectRatio: 2.25,
  },
  circularImage: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 140,
    borderColor: colors.NAVY_BLUE,
    borderWidth: 4,
    backgroundColor: colors.WHITE_TRANSPARENT,
  },
  iconCircularContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    borderWidth: 4,
    borderColor: colors.NAVY_BLUE,
    backgroundColor: colors.WHITE_TRANSPARENT,
  },
  statusRowText: {
    ...typography.body1,
    width: '100%',
    flexDirection: 'row',
    marginTop: 0,
    marginBottom: 2,
  },
  statusLabelText: { fontFamily: 'open-sans-bold' },
  errorMessage: { paddingHorizontal: ERROR_PADDING_HORIZONTAL },
  errorMessageText: {
    ...typography.body5,
    color: colors.RED,
  },
});
