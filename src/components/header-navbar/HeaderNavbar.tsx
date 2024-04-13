import { useTodoContext } from "../../hooks/useTodoContext";
import HeaderNavbarItem from "../header-navbar-item/HeaderNavbarItem";
import classes from "./HeaderNavbar.module.css";

export default function HeaderNavbar() {
  const { todos } = useTodoContext();

  const allCount = todos.length;
  const todoCount = todos.filter((todo) => todo.status === "todo").length;
  const doingCount = todos.filter((todo) => todo.status === "doing").length;
  const doneCount = todos.filter((todo) => todo.status === "done").length;

  return (
    <nav className={classes.nav}>
      <ul>
        <HeaderNavbarItem label={`All (${allCount})`} link="/" />
        <HeaderNavbarItem label={`To Do (${todoCount})`} link="todo" />
        <HeaderNavbarItem label={`Doing (${doingCount})`} link="doing" />
        <HeaderNavbarItem label={`Done (${doneCount})`} link="done" />
      </ul>
    </nav>
  );
}
