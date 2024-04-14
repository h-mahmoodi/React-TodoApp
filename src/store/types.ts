import { ReactNode } from "react";
import { Todo, TodoStatus } from "../types/todo";
import { ActionType } from "./todo-reducer";

export type Context = {
  todos: Todo[];
  add: (todo: Todo) => void;
  remove: (id: string) => void;
  changeStatus: (id: string, status: TodoStatus) => void;
  edit: (id: string, todo: Todo) => void;
};

export type TodoContextProviderProps = {
  children: ReactNode;
};

export type TodoState = {
  todos: Todo[];
};

export type TodoAction =
  | { type: ActionType.add; payload: Todo }
  | { type: ActionType.edit; payload: { id: string; todo: Todo } }
  | { type: ActionType.change; payload: { id: string; status: TodoStatus } }
  | { type: ActionType.remove; payload: string };
