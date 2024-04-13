import classes from "./TodoItem.module.css";
import { type Todo } from "../../types/todo";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../modal/Modal";
import { useTodoContext } from "../../hooks/useTodoContext";
import Label from "../label/Label";

type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
  const todoCTX = useTodoContext();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const handleRemove = () => {
    todoCTX.remove(todo.id);
    navigate(-1);
  };
  return (
    <>
      <div className={`${classes.container} ${classes[todo.status]}`}>
        <div className={classes.header}>
          <div className={classes.details}>
            <Label label={`#${todo.id}`} color="black" size="sm" />
            <Label label={todo.createdAt} color="black" size="sm" />
          </div>
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
        <h3>{todo.title}</h3>
        <p className={classes.description}>{todo.description}</p>
        <div className={classes.footer}>
          {todo.status === "todo" && (
            <Button
              onClick={() => todoCTX.changeStatus(todo.id, "doing")}
              color="green"
            >
              <Icon iconName="fi-br-play" />
              <span>Start Doing</span>
            </Button>
          )}
          {todo.status === "doing" && (
            <Button
              onClick={() => todoCTX.changeStatus(todo.id, "done")}
              color="black"
            >
              <Icon iconName="fi-br-check" />
              <span>Go to Done</span>
            </Button>
          )}
          {todo.status === "done" && (
            <Button
              onClick={() => todoCTX.changeStatus(todo.id, "todo")}
              color="indigo"
            >
              <Icon iconName="fi-br-refresh" />
              <span>Back to Doing</span>
            </Button>
          )}

          <div className={classes.buttons}>
            <Button color="orange">
              <Icon iconName="fi-br-edit" />
              <span>Edit</span>
            </Button>
            <Button color="red" onClick={() => setModal(true)}>
              <Icon iconName="fi-br-trash" />
              <span>Remove</span>
            </Button>
          </div>
        </div>
      </div>
      {modal && (
        <Modal onClose={() => setModal(false)} title="Are you sure to delete?">
          <div className="modal-buttons">
            <Button size="md" onClick={() => setModal(false)}>
              Cancel
            </Button>
            <Button size="md" color="red" onClick={handleRemove}>
              Delete Task
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}
