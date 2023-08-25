import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F51B5',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const NewTodoButton = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() =>
                navigation.navigate('Add', {
                  screen: 'ToDoScreen'
                })}>
      <View style={styles.container}>
        <Text style={styles.text}>Add new Todo</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NewTodoButton;
