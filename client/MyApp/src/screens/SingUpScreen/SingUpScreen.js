import { View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';

const SingUpScreen = () => {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = async () => {
    try {
      if (!username || !email || !password) {
        console.warn('Please fill in all fields');
        return;
      }
      if (password!=passwordRepeat){
        console.warn('The passwords are not equal');
        return;
      }

      const newUser = {
        username: username,
        email: email,
        password: password,
      };

      await axios.post('http://193.2.231.235:5000/users', newUser);

      console.warn('User Created');
      navigation.navigate('Sing In');
    } catch (error) {
      console.error(error);
    }
  }

  const onSingInPressed = () => {
    navigation.navigate('Sing In');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        
        <CustomInput 
        placeholder='Username' 
        value={username} 
        setValue={setUsername} 
        secureTextEntry={false}
        />
        <CustomInput 
        placeholder='Email' 
        value={email} 
        setValue={setEmail} 
        secureTextEntry={false}
        />
        <CustomInput 
        placeholder='Password' 
        value={password} 
        setValue={setPassword}
        secureTextEntry={true}
        />
        <CustomInput 
        placeholder='Repeat Password' 
        value={passwordRepeat} 
        setValue={setPasswordRepeat}
        secureTextEntry={true}
        />

        <CustomButton 
        text={'Register'} 
        onPress={onRegisterPressed}
        />
        <CustomButton 
        text={'Have an account? Log in'} 
        onPress={onSingInPressed}
        type='TERTIARY'
        />

      </View>
    </ScrollView>
  )
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
  }
})

export default SingUpScreen