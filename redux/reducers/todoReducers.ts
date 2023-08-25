import { RootState } from './todoReducersTypes'
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../actions/todoActions';
import { Todo } from './todoReducersTypes';
import { format } from 'date-fns';

const initialState: RootState = {
  log: [],
  todos: [],
};


const todoReducer = (state: RootState = initialState, action: any): RootState => {
  const now = new Date();
  const formattedTime = format(now, 'HH:mm:ss');
  const formattedDate = format(now, 'dd/MM/yy');
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        type: 'add',
        key: action.payload.key,
        text: action.payload.text,
        deletedTodo: null,
        previousTodo: null,
        updatedTodo: null,
        time: formattedTime,
        date: formattedDate,
        image: action.payload.image,
      };
      console.log(newTodo);
      return {
        ...state,
        todos: [...state.todos, newTodo],
        log: [...state.log, newTodo],
      };
    }
    case DELETE_TODO: {
      const deletedTodo = state.todos.find((todo: Todo) => todo.key === action.payload);
      const newTodo = {
        type: 'delete',
        key: action.payload.key,
        text: action.payload.text,
        deletedTodo: deletedTodo,
        previousTodo: null,
        updatedTodo: null,
        time: formattedTime,
        date: formattedDate,
      };
      return {
        ...state,
        todos: state.todos.filter((todo: Todo) => todo.key !== action.payload.key),
        log: [...state.log, newTodo],
      };
    }
    case UPDATE_TODO: {
      const updatedTodos = state.todos.map((todo: Todo) =>
        todo.key === action.payload.key ? action.payload.updatedTodo : todo,
      );
      const newTodo = {
        type: 'edit',
        key: updatedTodos[0].key,
        text: updatedTodos[0].text,
        deletedTodo: null,
        previousTodo: action.payload.previousTodo,
        updatedTodo: action.payload.updatedTodo,
        time: formattedTime,
        date: formattedDate,
      };
      return {
        ...state,
        todos: updatedTodos,
        log: [...state.log, newTodo],
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
