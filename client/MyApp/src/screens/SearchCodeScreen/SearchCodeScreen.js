import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import JSImage from '../../../assets/images/js.png';
import PythonImage from '../../../assets/images/python.png';
import JavaImage from '../../../assets/images/java.png';
import CImage from '../../../assets/images/c-.png';

const SearchCodeScreen = () => {
  const navigation = useNavigation();

  const JSPress = () => {
    navigation.navigate('JS Code');
  };

  const PythonPress = () => {
    navigation.navigate('Python Code');
  };

  const CPress = () => {
    navigation.navigate('C++ Code');
  };

  const JavaPress = () => {
    navigation.navigate('Java Code');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Choose a language</Text>

        <TouchableOpacity onPress={JSPress}>
          <Image source={JSImage} style={styles.image} />
        </TouchableOpacity>

        <TouchableOpacity onPress={PythonPress}>
          <Image source={PythonImage} style={styles.image} />
        </TouchableOpacity>

        <TouchableOpacity onPress={JavaPress}>
          <Image source={JavaImage} style={styles.image} />
        </TouchableOpacity>

        <TouchableOpacity onPress={CPress}>
          <Image source={CImage} style={styles.image} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#051C50',
    margin: 10,
    marginBottom: 50,
  },
  image: {
    width: 120,
    height: 120,
    margin: 15,
  },
});

export default SearchCodeScreen;
