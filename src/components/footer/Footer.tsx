import classes from "./Footer.module.css";
import Icon from "../icon/Icon";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Link className="btn btn-circle" to="add">
        <Icon iconName="fi-br-plus" />
      </Link>
    </footer>
  );
}
