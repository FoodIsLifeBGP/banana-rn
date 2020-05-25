import React from 'react';
import { Text } from 'react-native';

import styles from './SubMenu.styles';

<<<<<<< HEAD
const SubMenu = props => <Text style={styles.subMenu}>{props.text}</Text>;
=======
const SubMenu = props => <Text style={{ ...styles.subMenu, marginBottom: 10 }}>{props.text}</Text>;
>>>>>>> 31f784e... Create React component that will render SubMenu elements (Active, History, etc.)

export default SubMenu;