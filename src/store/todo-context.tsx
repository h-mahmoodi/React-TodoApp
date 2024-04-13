import { createContext, useReducer } from "react";
import todoReducer, { ActionType } from "./todo-reducer";

import { TodoStatus, type Todo } from "../types/todo";
import {
  type Context,
  type TodoContextProviderProps,
  type TodoState,
} from "./types";

const todos: Todo[] = [
  {
    id: "1",
    title: "Todo title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti magni perferendis beatae rem id tenetur fuga sint sed dolores. Magnam quas consequatur dolore id minus repellat excepturi laboriosam cum!",
    status: "todo",
    createdAt: "04/12/2024",
  },
  {
    id: "2",
    title: "Todo title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti magni perferendis beatae rem id tenetur fuga sint sed dolores. Magnam quas consequatur dolore id minus repellat excepturi laboriosam cum!",
    status: "doing",
    createdAt: "08/11/2024",
  },
  {
    id: "3",
    title: "Todo title 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti magni perferendis beatae rem id tenetur fuga sint sed dolores. Magnam quas consequatur dolore id minus repellat excepturi laboriosam cum!",
    status: "done",
    createdAt: "05/07/2024",
  },
];

const initialState: TodoState = {
  todos: todos,
};

export const TodoContext = createContext<Context | null>(null);

export default function TodoContextProvider({
  children,
}: TodoContextProviderProps) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const add = (todo: Todo) => {
    dispatch({ type: ActionType.add, payload: todo });
  };

  const remove = (id: string) => {
    dispatch({ type: ActionType.remove, payload: id });
  };
  const changeStatus = (id: string, status: TodoStatus) => {
    dispatch({ type: ActionType.change, payload: { id, status } });
  };

  const value = {
    todos: state.todos,
    add,
    remove,
    changeStatus,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
