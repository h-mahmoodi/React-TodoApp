import { useContext } from "react";
import { TodoContext } from "../store/todo-context";

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === null) {
    throw new Error("Todo Context Error.");
  }
  return context;
};
