import TodoList from "../../components/todo-list/TodoList";
import Button from "../../components/button/Button";
import { useTodoContext } from "../../hooks/useTodoContext";
import { useNavigate } from "react-router-dom";

export default function AllTodoPage() {
  const TodoCTX = useTodoContext();
  const navigate = useNavigate();
  return (
    <div>
      {TodoCTX.todos.length === 0 && (
        <div className="fallback">
          <div>You have no task for doing!</div>
          <Button size="lg" onClick={() => navigate("/add")}>
            Add your First Task
          </Button>
        </div>
      )}
      {TodoCTX.todos.length !== 0 && <TodoList todos={TodoCTX.todos} />}
    </div>
  );
}
