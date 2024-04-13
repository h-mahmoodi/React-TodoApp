import { type Todo } from "../../types/todo";
import TodoListItem from "../todo-list-item/TodoListItem";

import classes from "./TodoList.module.css";

type TodoListProps = {
  todos: Todo[];
};

export default function TodoList({ todos }: TodoListProps) {
  return (
    <div className={classes.listContainer}>
      <ul className={classes.list}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoListItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
