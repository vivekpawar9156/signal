import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { KeyboardAvoidingView } from 'react-native'
import { auth } from '../../firebase'



const LoginScreen = ({navigation}) => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('')


  useEffect(()=> {
     auth.onAuthStateChanged((authUser)=>{
      if (authUser){
        navigation.navigate('Home')
      }
    });
    // return unsubscribe;
  }, [])


  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />
      <Image source={require('../assets/Images/Signal3.png')}
      style={{width:200, height:200}}
      
      />
      <View style={{width:'90%'}}>
        <Input 
          placeholder='Email' 
          autoFocus 
          type='email'
          value={email}
          onChangeText={(text)=>setEmail(text)}
        />
        <Input 
          placeholder='Password' 
          type="password"
          secureTextEntry
          value={password}
          onChangeText= {(text) => setPassword(text)}
        
        />
        <Button title='Login' containerStyle={styles.button}/>
        <Button title='Register' type='outline' containerStyle={styles.button}
          onPress={()=> navigation.navigate('Register')}
        
        />
      </View>
      
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFF',
    padding:10
  },
  button:{
    width:'70%',
    padding:10,
    alignSelf:'center'

  }
})