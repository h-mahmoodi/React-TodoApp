import { type TodoAction, type TodoState } from "./types";

export enum ActionType {
  add = "ADD",
  edit = "EDIT",
  change = "CHANGE",
  remove = "REMOVE",
}

export default function todoReducer(state: TodoState, action: TodoAction) {
  if (action.type === ActionType.add) {
    return {
      todos: [...state.todos, action.payload],
    };
  }
  if (action.type === ActionType.remove) {
    return {
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    };
  }
  if (action.type === ActionType.edit) {
    return {
      todos: state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...action.payload.todo };
        } else {
          return todo;
        }
      }),
    };
  }
  if (action.type === ActionType.change) {
    return {
      todos: state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, status: action.payload.status };
        } else {
          return todo;
        }
      }),
    };
  }

  return state;
}
