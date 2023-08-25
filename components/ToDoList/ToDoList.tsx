import React from 'react';
import {FlatList} from 'react-native';
import ToDoListItem from '../ToDoListItem/ToDoListItem';
import { useSelector } from 'react-redux';
import { ToDoObject } from '../../redux/storeTypes';

interface ToDoListProps {
  navigation: any,
}

const ToDoList: React.FC<ToDoListProps> = ({navigation}) => {
  const todos = useSelector((state: ToDoObject) => state.todos);
  console.table(todos);
  return (
    <FlatList
      data={todos}
      renderItem={({item}) => {
        return <ToDoListItem item={item} navigation={navigation} />;
      }}
      keyExtractor={item => item.key}
    />
  );
};

export default ToDoList;