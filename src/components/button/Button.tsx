import { ComponentPropsWithRef, type ReactNode } from "react";

import classes from "./Button.module.css";
type ButtonProps = {
  children: ReactNode;
  color?: "indigo" | "green" | "black" | "orange" | "red";
  size?: "sm" | "md" | "lg";
} & ComponentPropsWithRef<"button">;

export default function Button({
  children,
  color = "indigo",
  size = "md",
  ...props
}: ButtonProps) {
  const styles = `${classes.button} ${classes[color]} ${classes[size]}`;
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
