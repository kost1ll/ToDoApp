import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


interface ToDoButtonProps {
  buttonText: string,
  onPressHandler: () => void
}

const ToDoButton: React.FC<ToDoButtonProps> = ({ buttonText, onPressHandler }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPressHandler}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3F51B5',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ToDoButton;