import { StyleSheet, Pressable,Text, View,Image, Alert } from 'react-native'
import React from 'react'

const Setting = (props) => {
    const logout=()=>{
         // Hiển thị thông báo xác nhận
    Alert.alert(
        'Đăng Xuất',
        'Bạn có chắc chắn muốn đăng xuất?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Login');
              console.log('Đã đăng xuất');
            },
          },
        ],
        {cancelable: false},
      );
    }
  return (
    <View style={{flex:1, backgroundColor:'black'}}>
   <View  style={styles.containerImage}>
     <Pressable>
     <Image source={{uri:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSs4DIEDuhp0wm8Z0iERmK8BNJeqzHvZGstv45pebicAh4I8Bz-'}} style={styles.image} />
     </Pressable>
     <Text style={{fontWeight: 'bold', color: 'white', fontSize: 28}}>
            Setting
          </Text>
     <Pressable>
     <Image source={require('./img/avt.png')} style={styles.image} />
     </Pressable>
      </View>
      <Pressable
        onPress={()=>navigation.navigate('Personal')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5,
            marginHorizontal:10
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#252A32',
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 15, height: 15, alignSelf: 'center'}}
              source={require('./img/history.png')}
            />
          </View>
          <Text style={{ color: 'white', fontSize: 18}}>
          History
          </Text>
          <Image
            style={{width: 20, height: 20}}
            source={require('./img/next.png')}
          />
        </Pressable>
        <Pressable
        onPress={()=>navigation.navigate('Personal')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5,
            marginHorizontal:10
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#252A32',
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 15, height: 15, alignSelf: 'center'}}
              source={require('./img/person.png')}
            />
          </View>
          <Text style={{ color: 'white', fontSize: 18}}>
        Personal Detail
          </Text>
          <Image
            style={{width: 20, height: 20}}
            source={require('./img/next.png')}
          />
        </Pressable>
        <Pressable
        onPress={()=>navigation.navigate('Personal')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5,
            marginHorizontal:10
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#252A32',
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 15, height: 15, alignSelf: 'center'}}
              source={require('./img/address1.png')}
            />
          </View>
          <Text style={{ color: 'white', fontSize: 18}}>
          Address
          </Text>
          <Image
            style={{width: 20, height: 20}}
            source={require('./img/next.png')}
          />
        </Pressable>
        <Pressable
        onPress={()=>navigation.navigate('Personal')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5,
            marginHorizontal:10
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#252A32',
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 15, height: 15, alignSelf: 'center'}}
              source={require('./img/payment.png')}
            />
          </View>
          <Text style={{ color: 'white', fontSize: 18}}>
          Payment method
          </Text>
          <Image
            style={{width: 20, height: 20}}
            source={require('./img/next.png')}
          />
        </Pressable>
        <Pressable
        onPress={()=>navigation.navigate('Personal')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5,
            marginHorizontal:10
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#252A32',
              borderRadius: 20,
              justifyContent: 'center',
              
            }}>
            <Image
              style={{width: 15, height: 15, alignSelf: 'center'}}
              source={require('./img/about.png')}
            />
          </View>
          <Text style={{ color: 'white', fontSize: 18}}>
         About
          </Text>
          <Image
            style={{width: 20, height: 20}}
            source={require('./img/next.png')}
          />
        </Pressable>
        <Pressable
        onPress={()=>props.navigation.navigate('contactUs')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5,
            marginHorizontal:10
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#252A32',
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <Image
             style={{width: 15, height: 15, alignSelf: 'center'}}
              source={require('./img/help.png')}
            />
          </View>
          <Text style={{ color: 'white', fontSize: 18}}>
          Help
          </Text>
          <Image
            style={{width: 20, height: 20}}
            source={require('./img/next.png')}
          />
        </Pressable>
        <Pressable
        onPress={()=>props.navigation.navigate('login')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5,
            marginHorizontal:10
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#252A32',
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <Image
             style={{width: 15, height: 15, alignSelf: 'center'}}
              source={require('./img/logout.png')}
            />
          </View>
          <Text style={{ color: 'white', fontSize: 18}}>
          Log out
          </Text>
          <Image
            style={{width: 20, height: 20}}
            source={require('./img/next.png')}
          />
        </Pressable>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        borderRadius:10
      },
      containerImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15,
        marginTop:20
      },
})