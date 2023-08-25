import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryScreen from '../../screens/LogScreen/LogScreen';
import ToDoNavigator from '../ToDoNavigator/ToDoNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';



const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ToDoNavigator} />
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
