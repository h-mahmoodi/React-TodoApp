import { type ReactNode } from "react";
import classes from "./Modal.module.css";

type ModalProps = {
  title?: string;
  onClose: () => void;
  children: ReactNode;
};
export default function Modal({
  title = "Modal",
  onClose,
  children,
}: ModalProps) {
  return (
    <div className={classes.modal}>
      <div className={classes.backdrop} onClick={onClose}></div>
      <div className={classes.content}>
        <div className={classes.header}>
          <span>{title}</span>
        </div>
        <div className={classes.data}>{children}</div>
      </div>
    </div>
  );
}
