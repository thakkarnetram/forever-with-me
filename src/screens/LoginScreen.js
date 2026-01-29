import React, {useState} from 'react';
import {View,TextInput,Text,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen= () => {
  const [password,setPassword] = useState();
  const handlePassword = (pass) => {
    setPassword(pass)
  }
  return (
    <View>
      <Text>
        Welcome Back
      </Text>
      <View>
        <TextInput style={styles.inputText} value={password} onChangeText={handlePassword} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer:{

  }
})

export default LoginScreen
