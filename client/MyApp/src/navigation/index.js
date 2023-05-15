import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SingInScreen from '../screens/SingInScreen'
import SingUpScreen from '../screens/SingUpScreen'
import HomeScreen from '../screens/HomeScreen'

import PostCodeScreen from '../screens/PostCodeScreen'
import SearchCodeScreen from '../screens/SearchCodeScreen'
import EditProfileScreen from '../screens/EditProfileScreen'

import JSScreen from '../screens/JSScreen'
import PythonScreen from '../screens/PythonScreen'
import CScreen from '../screens/CScreen/CScreen'
import JavaScreen from '../screens/JavaScreen'

import ObjectDetailsScreen from '../screens/ObjectDetailsScreen'
import EditCodeScreen from '../screens/EditCodeScreen'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Sing In' component={SingInScreen} />
        <Stack.Screen name='Sing Up' component={SingUpScreen} />

        <Stack.Screen name='Home' component={HomeScreen} />

        <Stack.Screen name='Post Code' component={PostCodeScreen} />
        <Stack.Screen name='Search Code' component={SearchCodeScreen} />
        <Stack.Screen name='Edit Profile' component={EditProfileScreen} />

        <Stack.Screen name='JS Code' component={JSScreen} />
        <Stack.Screen name='Python Code' component={PythonScreen} />
        <Stack.Screen name='C++ Code' component={CScreen} />
        <Stack.Screen name='Java Code' component={JavaScreen} />

        <Stack.Screen name='Object Details' component={ObjectDetailsScreen} />
        <Stack.Screen name='Edit Code' component={EditCodeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation