import React from 'react';
import ToDoList from '../../components/ToDoList/ToDoList';
import NewTodoButton from '../../components/NewTodoButton/NewTodoButton';
import { View, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgrey',
    padding: 20,
  },
})

interface HomeScreenProps {
  navigation: any,
}


const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <NewTodoButton navigation={navigation}/>
      <ToDoList navigation={navigation} />
    </View>
  )
}

export default HomeScreen;