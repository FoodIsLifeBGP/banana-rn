import { StyleSheet } from 'react-native';
import typography from '@util/typography';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    ...typography.body1,
    textAlign: 'center',
  },
  button: {
    width: 104,
    height: 46,
  },
});
