import classes from "./Label.module.css";

type LabelProps = {
  label: string;
  size?: "sm" | "md" | "lg";
  color?: "indigo" | "green" | "black";
};
export default function Label({
  label,
  size = "md",
  color = "indigo",
}: LabelProps) {
  return (
    <span className={`${classes.label} ${classes[size]} ${classes[color]}`}>
      {label}
    </span>
  );
}
