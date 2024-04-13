import React from "react";
import { useParams } from "react-router-dom";
import TodoItem from "../../components/todo-item/TodoItem";

export default function TodoItemPage() {
  const { id } = useParams();
  return (
    <div>
      <TodoItem />
    </div>
  );
}
