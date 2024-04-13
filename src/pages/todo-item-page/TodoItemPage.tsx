import { useParams } from "react-router-dom";
import TodoItem from "../../components/todo-item/TodoItem";
import { useTodoContext } from "../../hooks/useTodoContext";

export default function TodoItemPage() {
  const { id } = useParams();
  const todoCTX = useTodoContext();
  const todo = todoCTX.todos.find((todo) => todo.id === id);
  return <div>{todo && <TodoItem todo={todo} />}</div>;
}
