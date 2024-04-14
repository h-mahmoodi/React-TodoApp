import { FormEvent, useEffect, useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Textaria from "../textarea/Textaria";

import classes from "./EditForm.module.css";
import { useTodoContext } from "../../hooks/useTodoContext";
import { Todo } from "../../types/todo";
import { useNavigate, useParams } from "react-router-dom";

export default function EditFrom() {
  const todoCTX = useTodoContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const todo = todoCTX.todos.find((todo) => todo.id === id);
  console.log(todo);

  const [title, setTitle] = useState(todo?.title);
  const [description, setDescription] = useState(todo?.description);
  const [error, setError] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (!todo) {
      navigate("/notfound*");
    }
  }, [todo, navigate]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({ title: "", description: "" });
    if (!todo) {
      return;
    }
    if (!title || !description) {
      if (!title) {
        setError((error) => ({ ...error, title: "Title is required" }));
      }
      if (!description) {
        setError((error) => ({
          ...error,
          description: "Description is required",
        }));
      }
      return;
    }

    const newTodo: Todo = { ...todo, title, description };
    todoCTX.edit(todo.id, newTodo);
    navigate(`/todos/${todo.id}`);
  };

  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          error={error.title}
        />
        <Textaria
          id="description"
          rows={6}
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
          error={error.description}
        />
        <div className={classes.buttons}>
          <Button size="lg">Update</Button>
          <Button size="lg" type="button" color="black" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
