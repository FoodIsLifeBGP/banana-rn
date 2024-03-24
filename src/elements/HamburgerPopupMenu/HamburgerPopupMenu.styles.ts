import { StyleSheet } from 'react-native';
import * as colors from '@util/constants/colors';

export default StyleSheet.create({
  menuContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginTop: 5,
    width: '100%',
  },
  menuItem: {
    alignSelf: 'center',
    paddingTop: 0,
    paddingRight: 5,
    paddingBottom: 0,
    paddingLeft: 5,
  },
  menuItemText: {
    color: colors.NAVY_BLUE,
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  divider: { backgroundColor: colors.NAVY_BLUE },
});
