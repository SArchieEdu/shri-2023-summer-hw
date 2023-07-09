import React from "react";

import styles from "./styles.module.scss";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.root}>
      <Link href="/questions" className={styles.questions}>
        Вопросы-ответы
      </Link>
      <Link href="/about-us" className={styles.aboutUs}>
        О нас
      </Link>
    </div>
  );
};
