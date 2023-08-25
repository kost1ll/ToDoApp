import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, Image } from 'react-native';
import ToDoButton from '../ToDoButton/ToDoButton';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/actions/todoActions';



const ToDoListItem = ({ navigation, item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    Alert.alert('Delete ToDo', 'Are you sure?', [
        {text: 'OK', onPress: () => dispatch(deleteTodo(item))
},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
         },
    ]);
 
  };
  const handleEdit = () => {
    navigation.navigate('Edit', {
          screen: 'Edit',
          key: item.key,
          text: item.text,
        })
  }
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ToDo Item', {
          screen: 'ToDo Item',
          key: item.key,
          text: item.text,
          image: item.image
        })
      }
    >
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.text}</Text>
        <Image source={{uri: item.image}}></Image>
        <ToDoButton buttonText="🖊" onPressHandler={handleEdit} />
        <ToDoButton buttonText="❌" onPressHandler={handleDelete} />
      </View>
    </TouchableOpacity>
  );
};

export default ToDoListItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
    paddingTop: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
});