"use client";

import { Button } from "@/components/Button/components";
import { ModalPortal } from "@/components/ModalPortal/component";
import React, { useState } from "react";

import styles from "./styles.module.scss";

export const MovieCounter = ({ amount, increment, decrement }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <>
      <div className={styles.root}>
        <Button
          onClick={() => {
            console.log("amount", amount);
            if (amount === 1) {
              setIsModalOpened(true);
              return;
            }

            decrement();
          }}
          disabled={amount === 0}
        >
          -
        </Button>
        {amount}
        <Button onClick={increment} disabled={amount === 30}>
          +
        </Button>
      </div>
      <ModalPortal visible={isModalOpened}>
        <div className={styles.modal}>
          <span className={styles.modalTitle}>Точно удалить?</span>
          <div>
            <Button
              viewVariant="primary"
              size="l"
              onClick={() => {
                decrement();
                setIsModalOpened(false);
              }}
              className={styles.modalAction}
            >
              Да
            </Button>
            <Button
              viewVariant="secondary"
              size="l"
              onClick={() => {
                setIsModalOpened(false);
              }}
              className={styles.modalAction}
            >
              Нет
            </Button>
          </div>
        </div>
      </ModalPortal>
    </>
  );
};
