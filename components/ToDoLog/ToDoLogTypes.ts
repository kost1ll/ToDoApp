export type Todo = {
  type: string;
  key: string;
  text: string;
  deletedTodo: null;
  previousTodo: null;
  updatedTodo: null;
};

export type LogEntry = {
  type: 'add' | 'delete' | 'edit';
  key: string;
  text: string;
  deletedTodo?: Todo | null;
  previousTodo?: Todo | null;
  updatedTodo?: Todo | null;
  time: string;
  date: string;
};

export type RootState = {
  log: LogEntry[];
  todos: Todo[];
};

export type LogEntryType = 'add' | 'delete' | 'edit';
