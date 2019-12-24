import React from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-paper';
import { DrawerItems } from 'react-navigation-drawer';
import styles from './MenuDrawer.styles'

const MenuDrawer = props => (
  <ScrollView style = {styles.drawer}>
    <View style={styles.drawerHeader}>
      <View style={styles.avatar}>
        <Avatar.Image size={100} 
          source={require('../../../assets/images/banana-icon.png')} />
      </View>
      <View style={styles.drawerHeaderBuffer}>
        <Text style={styles.username}>Foods 4 U</Text>
      </View>
    </View>
    <SafeAreaView
      style={styles.container}
    >
      <DrawerItems {...props} labelStyle={styles.labelText} />
    </SafeAreaView>
  </ScrollView>
);

export default MenuDrawer;