export type Todo = {
  type?: string;
  key: string;
  text: string;
  image?: null | string;
  deletedTodo?: null;
  previousTodo?: null;
  updatedTodo?: null;
};

export type Key = string;

