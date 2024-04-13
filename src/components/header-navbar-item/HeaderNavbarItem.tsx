import classes from "./HeaderNavbarItem.module.css";
import { NavLink } from "react-router-dom";

type HeaderNavbarItemProps = {
  label: string;
  link: string;
};

export default function HeaderNavbarItem({
  label,
  link,
}: HeaderNavbarItemProps) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${classes.navItem} ${classes.active}`
            : `${classes.navItem}`
        }
        to={link}
      >
        {label}
      </NavLink>
    </li>
  );
}
