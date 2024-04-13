import { type Todo } from "../../types/todo";
import Label from "../label/Label";
import classes from "./TodoListItem.module.css";
import { Link } from "react-router-dom";

type TodoListItemProps = {
  todo: Todo;
};

export default function TodoListItem({ todo }: TodoListItemProps) {
  return (
    <div className={`${classes.item} ${classes[todo.status]}`}>
      <Link to={`/todos/${todo.id}`} className={classes.link}>
        <div className={classes.header}>
          <div>
            <h3 className={classes.title}>{todo.title}</h3>
          </div>
        </div>

        <div className={classes.description}>{todo.description}</div>

        <div className={classes.footer}>
          <div>
            {todo.status === "todo" && (
              <Label label={todo.status} color="indigo" />
            )}
            {todo.status === "doing" && (
              <Label label={todo.status} color="green" />
            )}
            {todo.status === "done" && (
              <Label label={todo.status} color="black" />
            )}
          </div>
          <div className={classes.footerDetails}>
            <Label label={`#${todo.id}`} color="black" size="sm" />
            <Label label={todo.createdAt} color="black" size="sm" />
          </div>
        </div>
      </Link>
    </div>
  );
}
