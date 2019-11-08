import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationService from './src/util/NavigationService';
import Route from './src/routes/Route';

export default function App() {
  return(
    <Route ref={navigatorRef => {
      NavigationService.setTopLevelNavigator(navigatorRef);
    }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
