import React from 'react';
import { Text } from 'react-native';

import styles from './SubMenu.styles';

const SubMenu = props => <Text style={{ ...styles.subMenu, marginBottom: 10 }}>{props.text}</Text>;

export default SubMenu;