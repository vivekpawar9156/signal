import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import HomeScreen from './app/screens/HomeScreen';


const Stack = createNativeStackNavigator();


const globalScreenOptions = {
  headerStyle: {backgroundColor:'#2C6BED'},
  headerTitleStyle: {color:'#FFF'},
  headerTintColor: '#FFF'
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions} >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})