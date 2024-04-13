import TodoList from "../../components/todo-list/TodoList";
import Button from "../../components/button/Button";
import { useTodoContext } from "../../hooks/useTodoContext";

export default function AllTodoPage() {
  const TodoCTX = useTodoContext();
  return (
    <div>
      {TodoCTX.todos.length === 0 && (
        <div className="fallback">
          <div>You have no task for doing!</div>
          <Button size="lg">Add your First Task</Button>
        </div>
      )}
      {TodoCTX.todos.length !== 0 && <TodoList todos={TodoCTX.todos} />}
    </div>
  );
}
