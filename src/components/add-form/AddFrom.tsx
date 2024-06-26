import { FormEvent, useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Textaria from "../textarea/Textaria";

import classes from "./AddFrom.module.css";
import { useTodoContext } from "../../hooks/useTodoContext";
import { Todo } from "../../types/todo";
import { useNavigate } from "react-router-dom";

export default function AddFrom() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState({
    title: "",
    description: "",
  });

  const todoCTX = useTodoContext();

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({ title: "", description: "" });
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
    const date = new Date(Date.now());
    const newTodo: Todo = {
      id: String(Math.floor(Math.random() * 10000) + 1),
      title,
      description,
      status: "todo",
      createdAt: `${date.toLocaleDateString()} _ ${date.toLocaleTimeString()}`,
    };
    todoCTX.add(newTodo);
    navigate("/");
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
          <Button size="lg">Submit</Button>
          <Button size="lg" type="button" color="black" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
