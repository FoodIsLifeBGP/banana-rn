import { StyleSheet } from 'react-native';
import * as colors from '@util/constants/colors';

const INPUT_PADDING_HORIZONTAL = 10;
const INPUT_HEIGHT = 48;
export default StyleSheet.create({
  inputIOS: {
    width: '100%',
    height: INPUT_HEIGHT,
    marginBottom: 5,
    paddingHorizontal: INPUT_PADDING_HORIZONTAL,
    paddingVertical: 13,
    backgroundColor: colors.LIGHT_YELLOW,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'transparent',
    color: colors.NAVY_BLUE,
    fontSize: 16,
  },
  inputAndroid: {
    width: '100%',
    height: INPUT_HEIGHT,
    marginBottom: 5,
    paddingHorizontal: INPUT_PADDING_HORIZONTAL,
    paddingVertical: 13,
    backgroundColor: colors.LIGHT_YELLOW,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'transparent',
    color: colors.NAVY_BLUE,
    fontSize: 16,
  },
});
