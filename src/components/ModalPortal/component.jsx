import { createPortal } from "react-dom";

import styles from "./styles.module.scss";
import { useEffect } from "react";

export const ModalPortal = ({ children, visible, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [visible]);

  return visible
    ? createPortal(
        <div className={styles.root}>
          <div className={styles.modal}>{children}</div>
        </div>,
        document.querySelector("#modal-portal")
      )
    : null;
};
