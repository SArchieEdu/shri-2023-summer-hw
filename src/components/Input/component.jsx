import React from "react";

import styles from "./style.module.scss";
import classNames from "classnames";

export const Input = ({ className, ...props }) => {
  return <input {...props} className={classNames(className, styles.root)} />;
};
