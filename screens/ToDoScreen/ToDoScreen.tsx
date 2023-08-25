import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, TextInput, TouchableOpacity, Text, View, Image } from 'react-native';
import uuid from 'uuid-random';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../redux/actions/todoActions';
import { useRoute } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';


const ToDoScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const route = useRoute();
  const currentRoute = route.name;
  const todos = useSelector(state => state.todos);
  const [todoText, setTodoText] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [selectImage, setSelectImage] = useState(null);
  const [base64Image, setBase64Image] = useState('');

  const openImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel) {
        console.log(response.assets[0].uri);
        setSelectImage(response.assets[0].uri);
      }
    });
};

  useEffect(() => {
    const loadImageAsBase64 = async () => {
      try {
        const imagePath = selectImage;
        const response = await RNFS.readFile(imagePath, 'base64');
        const base64 = `data:image/jpg;base64,${response}`;
        setBase64Image(base64);
      } catch (error) {
        console.log('Error converting image to Base64:', error);
      }
    };
    if (selectImage) {
    loadImageAsBase64();
  }
  }, [selectImage]);
  

  useEffect(() => {
    if (currentRoute === 'Edit') {
      const todoKey = route.params?.key ?? null;
      const todo = todos.find(todo => todo.key === todoKey);
      if (todo) {
        setEditingTodo(todo);
        setTodoText(todo.text);
        setSelectImage(todo.image);
      }
    } else {
      setEditingTodo(null);
      setTodoText('');
      setSelectImage(null);
    }
  }, [currentRoute, todos]);

  const handleAddTodo = () => {
    dispatch(addTodo({ key: uuid(), text: todoText, image: base64Image }));
    setTodoText('');
    navigation.navigate('Main');
    Alert.alert('New ToDo has been added');
  };
  const handleEditTodo = () => {
  if (editingTodo) {
    const updatedTodo = { ...editingTodo, text: todoText, image: base64Image };
    dispatch(updateTodo(editingTodo.key, editingTodo, updatedTodo));
    setTodoText('');
    navigation.navigate('Main');
    Alert.alert('ToDo has been updated');
  }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openImagePicker}>
        <Text style={styles.buttonText}>Add Image</Text>
      </TouchableOpacity>
       {selectImage && <Image source={{ uri: selectImage }} />}
      <TextInput
        style={styles.input}
        placeholder="Enter your todo"
        value={todoText}
        onChangeText={setTodoText}
      />
      <TouchableOpacity style={styles.button} onPress={currentRoute === 'Add' ? handleAddTodo : handleEditTodo}>
        <Text style={styles.buttonText}>{currentRoute === 'Add' ? 'Add new ToDo' : 'Edit ToDo'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ToDoScreen;
