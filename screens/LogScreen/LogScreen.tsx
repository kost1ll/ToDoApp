import { useSelector } from 'react-redux';
import ToDoLog from '../../components/ToDoLog/ToDoLog';
import { View, StyleSheet } from 'react-native';
import { RootState } from '../../redux/reducers/todoReducersTypes';

const LogScreen = () => {
  const log = useSelector((state: RootState) => state.log);
  console.table(log);
  
  return (
    <View style={styles.container}>
      <ToDoLog />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgrey',
    padding: 20,
  },
})

export default LogScreen;