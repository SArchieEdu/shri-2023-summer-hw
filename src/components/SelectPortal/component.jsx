import { useEffect } from "react";
import { createPortal } from "react-dom";

export const SelectPortal = ({ children, visible, onClose }) => {
  useEffect(() => {
    document.addEventListener("scroll", onClose, true);

    return () => document.removeEventListener("scroll", onClose, true);
  }, [onClose]);

  return visible
    ? createPortal(children, document.querySelector("#select-portal"))
    : null;
};
