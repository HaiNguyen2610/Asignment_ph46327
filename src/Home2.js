import { StyleSheet, Text, View,Pressable,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Home2 = (props) => {
  return (
    <View style={{flex:1,backgroundColor:'silver'}}>
      <Text style={{margin:5,fontSize:20,fontWeight:'bold'}}>Welcome</Text>
      <Text style={{margin:5,fontSize:20,fontWeight:'bold'}}>Nguyễn Xuân Hải</Text>
      <ScrollView>
      <View>
  
      <View style={{justifyContent:'space-between',flexDirection:'row',margin:5,alignItems:'center'}}>
        <TouchableOpacity>
        <View style={{width:200,height:200,padding:30,flexDirection:'column',borderRadius:20,justifyContent:'center',alignItems:'center',backgroundColor:'white',
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5 }}>
            <Text>
               Your BMI
            </Text>
            <Image style={{width:30,height:30}} source={{uri:'https://img.icons8.com/?size=100&id=20149&format=png&color=000000'}}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{margin:5,padding:30,flexDirection:'row',borderRadius:20,shadowColor: 'gray',backgroundColor:'yellow',
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5 }}>
              <Text>
                Steps:3000
            </Text>
            <Image style={{width:30,height:30}} source={{uri:'https://cdn.iconscout.com/icon/premium/png-256-thumb/step-4271545-3550286.png'}}/>
      </View>
      </TouchableOpacity>
      </View>
      <View style={{justifyContent:'space-between',flexDirection:'row',margin:5,alignItems:'center'}}>
        <TouchableOpacity>
        <View style={{margin:5,padding:30,flexDirection:'row',borderRadius:20,shadowColor: 'gray',backgroundColor:'cyan',
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5 }}>
            <Text>
                Steps:3000
            </Text>
            <Image style={{width:30,height:30}} source={{uri:'https://cdn.iconscout.com/icon/premium/png-256-thumb/step-4271545-3550286.png'}}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{margin:5,padding:30,flexDirection:'row',borderRadius:20,shadowColor: 'gray',backgroundColor:'yellow',
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5 }}>
              <Text>
                Steps:3000
            </Text>
            <Image style={{width:30,height:30}} source={{uri:'https://cdn.iconscout.com/icon/premium/png-256-thumb/step-4271545-3550286.png'}}/>
      </View>
      </TouchableOpacity>
      </View>
      <View style={{justifyContent:'space-between',flexDirection:'row',margin:5,alignItems:'center'}}>
        <TouchableOpacity>
        <View style={{margin:5,padding:30,flexDirection:'row',borderRadius:20,shadowColor: 'gray',backgroundColor:'cyan',
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5 }}>
            <Text>
                Steps:3000
            </Text>
            <Image style={{width:30,height:30}} source={{uri:'https://cdn.iconscout.com/icon/premium/png-256-thumb/step-4271545-3550286.png'}}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{margin:5,padding:30,flexDirection:'row',borderRadius:20,shadowColor: 'gray',backgroundColor:'yellow',
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5 }}>
              <Text>
                Steps:3000
            </Text>
            <Image style={{width:30,height:30}} source={{uri:'https://cdn.iconscout.com/icon/premium/png-256-thumb/step-4271545-3550286.png'}}/>
      </View>
      </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
      {/* <View style={styles.footer}>
        <Pressable onPress={()=>props.navigation.navigate('Home2')}>
          <Image
            style={{width: 30, height: 30}}
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHY28Q0vnrjnG6MVu2CDXpwgIEewYyvIEoA&s'}}
          />
        </Pressable>
        <Pressable onPress={()=>props.navigation.navigate('note')}>
          <Image
            style={{width: 30, height: 30}}
            source={{uri:'https://png.pngtree.com/png-vector/20230222/ourmid/pngtree-sticky-notes-line-icon-png-image_6612738.png'}}
          />
        </Pressable>
        <Pressable>
          <Image
            style={{width: 30, height: 30}}
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHY28Q0vnrjnG6MVu2CDXpwgIEewYyvIEoA&s'}}
          />
        </Pressable>
        <Image
          style={{width: 30, height: 30}}
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHY28Q0vnrjnG6MVu2CDXpwgIEewYyvIEoA&s'}}
        />
      
      </View> */}

    </View>
   
  )
}

export default Home2

const styles = StyleSheet.create({
    footer: {
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        flexDirection: 'row',
      },
})