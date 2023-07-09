import React, { FC, PropsWithChildren, MouseEvent } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export const Button = ({
  onClick,
  children,
  viewVariant = "primary",
  className,
  disabled,
  size = "m",
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        styles.root,
        className,
        styles[viewVariant],
        styles[size],
        {
          [styles.disabled]: disabled,
        }
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
