import { ComponentPropsWithoutRef } from "react";
import classes from "./Input.module.css";

type InputProps = {
  id: string;
  error: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ id, error, ...props }: InputProps) {
  return (
    <div className={classes.input}>
      <div className={classes.header}>
        <label htmlFor={id}>Title</label>
        {error && <span className={classes.error}>{error}</span>}
      </div>

      <input type="text" id={id} {...props} />
    </div>
  );
}
