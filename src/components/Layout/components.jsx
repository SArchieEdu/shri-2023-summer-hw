import React from "react";
import { Footer } from "../Footer/components.jsx";

import styles from "./styles.module.scss";
import { HeaderContainer } from "@/components/Header/container";

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <div id="select-portal" className={styles.selectPortal} />
      <div id="modal-portal" className={styles.selectPortal} />
      <HeaderContainer className={styles.header} />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};
