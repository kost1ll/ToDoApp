import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import TodoDetailsScreen from '../../screens/TodoDetailsScreen/TodoDetailsScreen';
import ToDoScreen from '../../screens/ToDoScreen/ToDoScreen';

const Stack = createNativeStackNavigator();

export default function ToDoNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={HomeScreen}
          options={{title: 'ToDo List'}}
        />
        <Stack.Screen
          name="ToDo Item"
          component={TodoDetailsScreen}
          options={{title: 'Item'}}
        />
        <Stack.Screen
          name="Add"
          component={ToDoScreen}
          options={{title: 'Add ToDo'}}
        />
        <Stack.Screen
          name="Edit"
          component={ToDoScreen}
          options={{title: 'Edit ToDo'}}
        />
      </Stack.Navigator>
  )
}
