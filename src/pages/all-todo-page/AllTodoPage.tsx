import React from "react";
import TodoList from "../../components/todo-list/TodoList";
import { useTodoContext } from "../../store/todo-context";
import Button from "../../components/button/Button";

export default function AllTodoPage() {
  const TodoCTX = useTodoContext();
  return (
    <div>
      {TodoCTX.todos.length === 0 && (
        <div className="fallback">
          <div>Please add some tasks</div>
          <Button>Add your First Task</Button>
        </div>
      )}
      {TodoCTX.todos.length !== 0 && <TodoList todos={TodoCTX.todos} />}
    </div>
  );
}
