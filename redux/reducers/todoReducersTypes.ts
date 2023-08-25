export type Todo = {
  type: string;
  key: string;
  text: string;
  deletedTodo: null;
  previousTodo: null;
  updatedTodo: null;
  time: string,
  date: string,
};

export type RootState = {
  log: Todo[];
  todos: Todo[];
};

export type Options = {
    hour?: string,
    minute?: string,
    second?: string,
    year?: string,
    month?: string,
    day?: string,
};
