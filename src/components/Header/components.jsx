import classNames from "classnames";
import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";
import Image from "next/image";

export const Header = ({ className, ticketAmount }) => {
  return (
    <header className={classNames(className, styles.root)}>
      <Link href={"/"} className={styles.title}>
        Билетопоиск
      </Link>
      <Link href="/cart" className={styles.cart}>
        <div className={styles.amount}>{ticketAmount}</div>
        <Image src="/basket.png" width="32" height="32" alt="cart" />
      </Link>
    </header>
  );
};
