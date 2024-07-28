import { Alert, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View, } from 'react-native'
import React, { useState } from 'react'
import { CheckBox, Icon, Image } from 'react-native-elements'
import { Pressable } from 'react-native';

const Register = (props) => {
const [fullname, setFullName] = useState('')
const [email, setEmail] = useState('')
const [username, setUserName] = useState('')
const [password, setPassword] = useState('')
const [numberPhone, setNumberPhone] = useState('')
const [address, setAddresss] = useState('')
const validate = () => {
  if (!fullname || !email || !username|| !password ||!numberPhone||!address) {
    Alert.alert('Không bỏ trống dữ liệu');
    return false;
  }
  return true;
}
 const handleSubmit= async()=>{
  if (!validate()) return;
const userData={
  fullname:fullname,
  email:email,
  pass:password,
  address:address,
  numberphone:numberPhone,
  username:username,
}
try {
  const response = await fetch('https://66603a055425580055b2e5c7.mockapi.io/user',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
Alert.alert("Đăng kí thành công")
props.navigation.navigate('login')
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const result = await response.json();
  console.log('User added:', result);
  setFullName('')
  setEmail('')
  setAddresss('')
  setNumberPhone('')
  setPassword('')
  setUserName('')
} catch (error) {
  console.error('Error adding user:', error);
}
 }
  return (

    <View style={styles.title}>
      <ImageBackground source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/554/975/desktop-wallpaper-nature-for-mobile-backgrounds-nature-mobile-full-thumbnail.jpg' }} style={styles.background}>
        <Image style={styles.logo} source={{ uri: 'https://cdn-icons-png.freepik.com/512/4300/4300605.png' }}></Image>
        <Text style={styles.loginText}>Welcome to Lunggo</Text>
        <Text>Register to continue</Text>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            value={fullname}
            onChangeText={setFullName}
            placeholder="Enter fullname"
            placeholderTextColor={'black'}
          />
          <View style={{ height: 10 }}></View>
          <TextInput style={styles.input} placeholder='Enter email' placeholderTextColor={'black'} keyboardType='email-address'   value={email}
            onChangeText={setEmail}></TextInput>
          <View style={{ height: 10 }}></View>
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            placeholderTextColor={'black'
            }
            value={username}
            onChangeText={setUserName}
          />
          <View style={{ height: 10 }}></View>
          <TextInput style={styles.input} placeholder='Enter password' placeholderTextColor={'black'}   value={password}
            onChangeText={setPassword}></TextInput>
          <View style={{ height: 10 }}></View>

          <View style={{ height: 10 }}></View>
          <TextInput style={styles.input} placeholder='Enter numberphone' placeholderTextColor={'black'} value={numberPhone}
            onChangeText={setNumberPhone}></TextInput>
          <View style={{ height: 10 }}></View>
          <TextInput style={styles.input} placeholder='Enter address' placeholderTextColor={'black'} value={address} onChangeText={setAddresss}></TextInput>
        </SafeAreaView>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.textButton}>Register</Text>
        </Pressable>
        <View style={styles.view}>
          <Text>Your have an account? </Text>
          <Text style={styles.textQuestion}>Sign In</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    flex: 1
  },
  background: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    height: 50,
    padding: 10,
    width: 350,
    borderRadius: 15,
    backgroundColor: 'rgba(300, 300, 300, 0.5)',
  },
  loginText: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'flex-start'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'gray',
    width: 350,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    padding: 5,
    width: 350,
    height: 50,
    borderRadius: 20,
    margin: 5,
    justifyContent: 'center',
    backgroundColor: 'darkblue',
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  checkbox: {
    alignSelf: 'flex-start',
    marginLeft: 20
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  label: {
    margin: 8,
  },
  view: {
    flexDirection: 'row'
  },
  textQuestion: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 50,
  }
})
export default Register;