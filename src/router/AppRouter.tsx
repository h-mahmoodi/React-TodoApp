import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import AllTodoPage from "../pages/all-todo-page/AllTodoPage";
import TodoPage from "../pages/todo-page/TodoPage";
import DoingPage from "../pages/doing-page/DoingPage";
import DonePage from "../pages/done-page/DonePage";
import AddTodo from "../pages/add-todo/AddTodo";
import TodoItemPage from "../pages/todo-item-page/TodoItemPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AllTodoPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="doing" element={<DoingPage />} />
        <Route path="done" element={<DonePage />} />
        <Route path="add-todo" element={<AddTodo />} />
        <Route path=":id" element={<TodoItemPage />} />
      </Route>
    </Routes>
  );
}
