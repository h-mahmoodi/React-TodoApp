import HeaderNavbar from "../header-navbar/HeaderNavbar";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <div>
        <h1>Todo App</h1>
      </div>
      <HeaderNavbar />
    </header>
  );
}
