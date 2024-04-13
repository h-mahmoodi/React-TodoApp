import classes from "./TodoItem.module.css";
import { type Todo } from "../../types/todo";
import Button from "../button/Button";
import Icon from "../icon/Icon";

type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className={classes.container}>
      <div>
        <div>
          <span>id</span>
          <span>date</span>
        </div>
        <span>status</span>
      </div>
      <h3>Todo title</h3>
      <p>todo description</p>
      <div className={classes.footer}>
        <Button>
          <Icon iconName="fi-br-check" />
          <span>Start Doing</span>
        </Button>
        <Button color="red">
          <Icon iconName="fi-br-trash" />
          <span>Remove</span>
        </Button>
      </div>
    </div>
  );
}
