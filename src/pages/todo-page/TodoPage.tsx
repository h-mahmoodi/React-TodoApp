import React from "react";
import { useTodoContext } from "../../store/todo-context";
import TodoList from "../../components/todo-list/TodoList";

export default function TodoPage() {
  const TodoCTX = useTodoContext();
  const todos = TodoCTX.todos.filter((todo) => todo.status === "todo");

  return (
    <div>
      {todos.length === 0 && (
        <div className="fallback">
          <div>You have no todo task</div>
        </div>
      )}
      {todos.length !== 0 && <TodoList todos={todos} />}
    </div>
  );
}
