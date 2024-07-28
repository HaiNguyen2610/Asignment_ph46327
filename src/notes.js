import { Alert,Modal, Image,Pressable,TouchableOpacity,FlatList, StatusBar, StyleSheet, Text, View, TextInput,Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const notes = (props) => {
  const [todoList, settodoList] = useState([])
  const [modalVisible, setmodalVisible] = useState(false)
  const [modalVisible2, setmodalVisible2] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState(false)
  const [editTodo, setEditTodo] = useState(null);
  const getList = async ()=>{
    try {
        const res = await fetch('https://66657cb7d122c2868e40cf77.mockapi.io/notes')
        const arr = await res.json();
        settodoList(arr);
    } catch (e) {
        console.log("Lỗi quá trình lấy dữ liệu: " + e.message);
    }
  }
  useEffect(()=>{
    getList()
  },[]);
  const addTodo = async()=>{
    const todo={
    "title":title,
    "content":content
    }
    try {
     const response= await fetch('https://66657cb7d122c2868e40cf77.mockapi.io/notes',{
  method:'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(todo),
      });
      setmodalVisible(true)
      if (response.ok) {
        Alert.alert('Thành công', 'Đã thêm thành công');
        const newTodo = await response.json();
        settodoList(prevState => [...prevState, newTodo]); 
        setTitle('');
        setContent('');
        setmodalVisible(false)
      } else {
        Alert.alert('Lỗi', 'Không thể thêm');
      }
    } catch (error) {
  
    }
  }
  //sửa
  const handleEditTodo = (todo) => {
    setEditTodo(todo);
    setTitle(todo.title);
    setContent(todo.content);
    setmodalVisible2(true)
  };
  const handleUpdateTodo = async () => {
    const updatedTodo = {
      id: editTodo.id,
      title: title,
      content: content
    };
  
    try {
      const response = await fetch(`https://66657cb7d122c2868e40cf77.mockapi.io/notes/${editTodo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodo),
      });
  
      if (response.ok) {
        Alert.alert('Thành công', 'Đã cập nhật công việc thành công');
        setmodalVisible2(false);
        const updatedList = todoList.map(todo => (todo.id === editTodo.id ? updatedTodo : todo));
        settodoList(updatedList);
      } else {
        Alert.alert('Lỗi', 'Không thể cập nhật công việc');
      }
    } catch (error) {
      console.error('Lỗi cập nhật công việc:', error);
    }
  };
  const deleteTodo = async (id) => {
    try {
      await fetch(`https://66657cb7d122c2868e40cf77.mockapi.io/notes/${id}`, {
        method: 'DELETE',
      });
      settodoList(todoList.filter(todo => todo.id !== id));
      Alert.alert("Xoá thành công")
    } catch (error) {
      console.log(error);
    }
  };
  const ItemTodo =({todo})=>{
return(
  <View style={{margin:10,backgroundColor:'rgba(0, 0, 0, 0.1)',padding:10,borderRadius:10}}>
    <Text style={{fontSize:20, color:'red',marginLeft:5,fontWeight:'bold'}}>{todo.title}</Text>
    <Text style={{fontSize:15, color:'green',marginLeft:5}}>{todo.content}</Text>
    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
      <Button title='Xoá' onPress={()=>deleteTodo(todo.id)}>
      </Button>
    </View>
    </View>
)
  }
  return (
    <View style={{flex:1}}>
      <StatusBar hidden={true}/>
      <View style={{height:40,justifyContent:'center', alignItems:'center',backgroundColor:'cyan'}}>
        <Text>
        Biết ơn, hạnh phúc của bạn trong hôm nay
        </Text>
      </View>
        <FlatList
        data={todoList}
        keyExtractor={item=>item.id.toString()}
        renderItem={({item})=><ItemTodo todo={item}/>}
        />
      <Pressable onPress={()=>setmodalVisible(true)} style={{justifyContent:'flex-end',position:'absolute',right:10,bottom:40}}>
          <Image source={{ uri: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-add-icon-png-image_956621.jpg' }} style={{ width: 50, height: 50,borderRadius:50}} />
        </Pressable>
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setmodalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={{fontSize:30,fontWeight:'bold'}}>ADD NOTE</Text>
          <TextInput style={{padding:10,borderWidth:1,borderColor:'black',borderRadius:10,width:250,margin:5}} placeholder='Nhập tiêu đề' value={title} onChangeText={setTitle}></TextInput>
          <TextInput style={{padding:10,borderWidth:1,borderColor:'black',borderRadius:10,width:250}} placeholder='Nhập nội dung' value={content} onChangeText={setContent}></TextInput>
          <View style={styles.checkboxContainer}>
        </View>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={addTodo}
              >
                <Text style={styles.textStyle}>ADD</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        
    </View>
  )
}

export default notes

const styles = StyleSheet.create({

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 5,

  }, label: {
    margin: 8,
  },
  checkbox: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:10
  },
  titleContainer: {
    backgroundColor: '#CCFF00',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0066FF',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 10
  },
  title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width:300,
    height:300,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15
  },
  modalName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: 15
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  deleteButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
    alignItems:'center'
  },
  deleteButtonText: {
    color: '#ffffff',
    fontWeight: 'bold'
  },
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