/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Navigation from './src/navigation';
import { AuthProvider } from './src/components/Authentication/AuthContext';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  }
});

export default App;
