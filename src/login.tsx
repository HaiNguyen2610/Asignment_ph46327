import { Alert, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View, } from 'react-native'
import  React, { useState } from 'react'
import { Pressable } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Image } from 'react-native-elements/dist/image/Image';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


const LoginScreen = (props) => {
  const [isSelected, setSelection] = useState(false);
  const [username, setName] = useState('')
  const [pass, setPassword] = useState('')
  const validate=()=>{
    if(!username||!pass){
      Alert.alert("không được bỏ trống")
      return false;
    }
    return true;
  }
  
  const handleLogin = async () => {
    if (!validate()) return;
    try {
      const response = await fetch('https://66603a055425580055b2e5c7.mockapi.io/user')
        const users= await response.json()
        const user = users.find(
          u => u.username == username && u.pass == pass,
        );
if(user){
  Alert.alert("Đăng nhập thành công")
  props.navigation.navigate('Home2')
}else{
  Alert.alert("Đăng nhập thất bại")
}
    } catch (error) {
      Alert.alert('Đăng nhập lỗi', error.message);
    }
  };
  return (

    <View style={styles.title}>
      <ImageBackground source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/554/975/desktop-wallpaper-nature-for-mobile-backgrounds-nature-mobile-full-thumbnail.jpg' }} style={styles.background}>
        <Image style={styles.logo} source={{ uri: 'https://cdn-icons-png.freepik.com/512/4300/4300605.png' }}></Image>
        <Text style={styles.loginText}>Welcome to Healthy App</Text>
        <Text>Login to continue</Text>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            placeholderTextColor={'black'}
            value={username}
            onChangeText={setName}
          />

          <View style={{ height: 10 }}></View>
          <TextInput style={styles.input} placeholder='Enter password' placeholderTextColor={'black'}
          value={pass}
          onChangeText={setPassword}
          ></TextInput>
        </SafeAreaView>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox} />
          <Text style={styles.label}>Remember password?</Text>
        </View>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Sign In</Text>
        </Pressable>
        <Pressable style={styles.button2}>
          <Image style={styles.containerImg} source={{ uri: ('https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png') }}></Image>
          <Text style={styles.registerText}>Sign In with Google</Text>
        </Pressable>
        <View style={styles.view}>
          <Text>Don't have an account? </Text>
          <Text style={styles.textQuestion} onPress={()=>props.navigation.navigate('register')}>Register</Text>
        </View>
        <View style={styles.view}>
          <Text>Forgot password? </Text>
          <Text style={styles.textQuestion}>Forgot</Text>
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
  button2: {
    width: 350,
    height: 50,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(180, 180, 180, 0.5)',
  },
  registerText: {
    color: 'darkblue',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold'
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
    justifyContent: 'flex-start'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 5,

  },
  label: {
    margin: 8,
  },
  view: {
    flexDirection: 'row',
    marginTop: 25
  },
  textQuestion: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15
  },
  containerImg: {
    width: 30,
    height: 30,
    borderRadius: 50,
    margin: 5,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
  }
})
export default LoginScreen;