import { createContext, useEffect, useReducer } from "react";
import todoReducer, { ActionType } from "./todo-reducer";

import { TodoStatus, type Todo } from "../types/todo";
import {
  type Context,
  type TodoContextProviderProps,
  type TodoState,
} from "./types";

const initialState: TodoState = {
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),
};

export const TodoContext = createContext<Context | null>(null);

export default function TodoContextProvider({
  children,
}: TodoContextProviderProps) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  const add = (todo: Todo) => {
    dispatch({ type: ActionType.add, payload: todo });
  };

  const remove = (id: string) => {
    dispatch({ type: ActionType.remove, payload: id });
  };
  const changeStatus = (id: string, status: TodoStatus) => {
    dispatch({ type: ActionType.change, payload: { id, status } });
  };
  const edit = (id: string, todo: Todo) => {
    dispatch({ type: ActionType.edit, payload: { id, todo } });
  };

  const value = {
    todos: state.todos,
    add,
    remove,
    changeStatus,
    edit,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
