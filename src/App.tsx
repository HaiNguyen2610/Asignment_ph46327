import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './login';
import RegisterScreen from './register';
import Home2Screen from './Home2';
import notes from './notes';
import Profile from './Profile';
import healthy from './healthy';
import { Image, StatusBar, View } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home2Screen} options={{tabBarIcon:()=>(
      <Image style={{width:30, height:30}} source={{uri:'https://img.icons8.com/?size=100&id=73&format=png&color=000000'}}/>
    )}} />
    <Tab.Screen name="Note" component={notes} options={{tabBarIcon:()=>(
      <Image style={{width:30, height:30}} source={{uri:'https://img.icons8.com/?size=100&id=12581&format=png&color=000000'}}/>
    )}}/>
     <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:()=>(
      <Image style={{width:30, height:30}} source={{uri:'https://img.icons8.com/?size=100&id=7820&format=png&color=000000'}}/>
    )}}/>
    <Tab.Screen name="Healthy" component={healthy} options={{tabBarIcon:()=>(
      <Image style={{width:30, height:30}} source={{uri:'https://img.icons8.com/?size=100&id=25632&format=png&color=000000'}}/>
    )}}/>
    
    </Tab.Navigator>
  );
}

const App = () => {
  return (
   <View style={{ flex: 1 }}>
       <StatusBar hidden={true} />
     <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='login' component={LoginScreen}/>
    <Stack.Screen name="register" component={RegisterScreen} />
    <Stack.Screen name="Main" component={MyTab} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
   </View>
  );
};

export default App;