import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { AuthContext } from '../../components/Authentication/AuthContext';

const EditProfileScreen = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const onSavePressed = async () => {
    try {
      if (!username || !email || !password) {
        console.warn('Please fill in all fields');
        return;
      }
      if (password !== passwordRepeat) {
        console.warn('The passwords are not equal');
        return;
      }

      const updatedUser = {
        username: username,
        email: email,
        password: password,
      };

      const userId = user._id;
      if (!userId) {
        console.warn('User ID not found');
        return;
      }

      await axios.put(`http://193.2.231.235:5000/users/${userId}`, updatedUser);

      console.warn('User updated');
      updateUser(updatedUser);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  const onBackPressed = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Edit Profile</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />

        <CustomButton text={'Save'} onPress={onSavePressed} />
        <CustomButton text={'Back'} onPress={onBackPressed} type="TERTIARY" />
      </View>
    </ScrollView>
  );
};

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
});

export default EditProfileScreen;
