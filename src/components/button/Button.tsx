import { type ReactNode } from "react";

import classes from "./Button.module.css";
type ButtonProps = {
  children: ReactNode;
  color?: "indigo" | "red";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  children,
  color = "indigo",
  size = "sm",
}: ButtonProps) {
  const styles = `${classes.button} ${classes[color]} ${classes[size]}`;
  return <button className={styles}>{children}</button>;
}
