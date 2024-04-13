import classes from "./Icon.module.css";

type IconProps = {
  iconName: string;
};

export default function Icon({ iconName }: IconProps) {
  return <i className={`fi ${iconName} ${classes.icon}`}></i>;
}
