import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {StatusBar} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import {Alert} from 'react-native/Libraries/Alert/Alert';
import {auth} from '../../firebase';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'afjdskjfkadhk',
    });
  }, [navigation]);

  const register = () => {
    auth
      .creteUserWithEmailAndPassword(email, password)
      .then(authUser => {
        authUser.user.update({
            displayName: name,
            photoURL: imageUrl || 'app/assets/Images/download.png'
        })
      })
      .catch(error => Alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{marginBottom: 50}}>
        Create a Signal Account
      </Text>
      <View style={styles.inputcontainer}>
        <Input
          placeholder="Enter Your Name"
          type="text"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Input
          placeholder="Prifile Picture URL (Optional)"
          type="text"
          value={imageUrl}
          onChangeText={text => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        title="Register"
        onPress={register}
        raised
        containerStyle={styles.button}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
  },
  inputcontainer: {
    width: '100%',
  },
  button: {
    width: '50%',
  },
});
