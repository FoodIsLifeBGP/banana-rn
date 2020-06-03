import React from 'react';
import { Text } from 'react-native';

import styles from './SubMenu.styles';

const SubMenu = props => <Text style={styles.subMenu}>{props.text}</Text>;

export default SubMenu;