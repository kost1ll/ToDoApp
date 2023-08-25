export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
import { Key, Todo } from "./todoActionsTypes";

export const addTodo = (todo: Todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (todo: Todo) => ({
  type: DELETE_TODO,
  payload: todo,
});

export const updateTodo = (key: Key, previousTodo: Todo | null, updatedTodo: Todo | null) => {
  return {
    type: UPDATE_TODO,
    payload: {
      key,
      previousTodo,
      updatedTodo,
    },
  };
};
