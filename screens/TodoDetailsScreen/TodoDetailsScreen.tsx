import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgrey',
    padding: 20,
  },
})

interface ToDoDetailsProps {
  route: any,
  navigation: any
}

const TodoDetailsScreen: React.FC<ToDoDetailsProps> = ({ navigation, route }) => {
  const { key, text, image } = route.params;
  console.log(route.params);

  
  return (
    <View style={styles.container}>
      <Text>{ text }</Text>
      <Text>This is {key}</Text>
      <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
    </View>

  )
}

export default TodoDetailsScreen;