import { type Todo } from "../../types/todo";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import classes from "./TodoListItem.module.css";
import { Link } from "react-router-dom";

type TodoListItemProps = {
  todo: Todo;
};

export default function TodoListItem({ todo }: TodoListItemProps) {
  return (
    <div className={classes.item}>
      <Link to={todo.id} className={classes.link}>
        <div className={classes.header}>
          <div>
            <h3 className={classes.title}>{todo.title}</h3>
            <div>
              <span className={classes.date}>{todo.createdAt}</span>
              <span> </span>
              <span className={classes.date}>#{todo.id}</span>
            </div>
          </div>
          <div className={classes.details}>
            <span className={classes.status}>{todo.status}</span>
          </div>
        </div>

        <div className={classes.description}>{todo.description}</div>
      </Link>
      <div className={classes.footer}>
        <Button>
          <Icon iconName="fi-br-check" />
          <span>Start Doing</span>
        </Button>
        {/* <Button color="red">
          <Icon iconName="fi-br-trash" />
          <span>Remove</span>
        </Button> */}
      </div>
    </div>
  );
}
