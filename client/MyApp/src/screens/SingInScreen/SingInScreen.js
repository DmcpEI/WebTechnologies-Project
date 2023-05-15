import React, { useState, useContext } from 'react';
import { View, Image, StyleSheet, ScrollView, Text, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/codeshare2.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {AuthContext} from '../../components/Authentication/AuthContext';

const SignInScreen = () => {
  const { updateUser } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const onSignIn = async () => {
    try {
      const response = await axios.post('http://193.2.231.235:5000/users/login', { username, password });
      const userData = response.data;
      updateUser(userData);
      navigation.navigate('Home');
    } catch (error) {
      setError('Invalid username or password');
    } finally {
      setTimeout(() => setError(''), 3000);
    }
  };  

  const onSignUpPressed = () => {
    navigation.navigate('Sing Up');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.5}]} resizeMode='contain'/>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          secureTextEntry={false}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton text="Sign In" onPress={onSignIn} />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    maxWidth: 300,
    maxHeight: 200,
    marginBottom: 100,
    marginTop: 50,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignInScreen;
