import { ComponentPropsWithoutRef } from "react";
import classes from "./Textaria.module.css";

type TextariaProps = {
  id: string;
  error: string;
} & ComponentPropsWithoutRef<"textarea">;

export default function Textaria({ id, error, ...props }: TextariaProps) {
  return (
    <div className={classes.textaria}>
      <div className={classes.header}>
        <label htmlFor={id}>Description</label>
        {error && <span className={classes.error}>{error}</span>}
      </div>
      <textarea id={id} {...props} />
    </div>
  );
}
