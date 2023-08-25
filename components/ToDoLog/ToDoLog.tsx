import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from './ToDoLogTypes';

const ToDoLog = () => {
  const log = useSelector((state: RootState) => state.log);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.tableHeader}>Todo History</Text>
      <View style={styles.tableRow}>
        <Text style={styles.tableHeaderCell}>Todo</Text>
        <Text style={styles.tableHeaderCell}>ID</Text>
        <Text style={styles.tableHeaderCell}>Action</Text>
      </View>
      {log.map((entry, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.tableCell}>
            {entry.type === 'edit' && entry.previousTodo && entry.updatedTodo
              ? `${entry.previousTodo?.text} -> ${entry.updatedTodo?.text}`
              : entry.type === 'delete' && entry.deletedTodo
              ? entry.deletedTodo.text
              : entry.text}
          </Text>
          <Text style={styles.tableCell}>
            {entry.time}
            {'\n'}
            {entry.date}
          </Text>
          <Text style={styles.tableCell}>
            {entry.type === 'add' && 'Add'}
            {entry.type === 'delete' && 'Delete'}
            {entry.type === 'edit' && 'Edit'}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  tableHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    borderRightWidth: 1,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    borderRightWidth: 1,
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  tableCell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
});

export default ToDoLog;
