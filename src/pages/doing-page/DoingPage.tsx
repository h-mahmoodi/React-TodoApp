import React from "react";
import TodoList from "../../components/todo-list/TodoList";
import { useTodoContext } from "../../store/todo-context";

export default function DoingPage() {
  const TodoCTX = useTodoContext();
  const todos = TodoCTX.todos.filter((todo) => todo.status === "doing");

  return (
    <div>
      {todos.length === 0 && (
        <div className="fallback">
          <div>You have no doing task</div>
        </div>
      )}
      {todos.length !== 0 && <TodoList todos={todos} />}
    </div>
  );
}
