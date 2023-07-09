import { SelectPortal } from "@/components/SelectPortal/component";
import React, { useEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";

export const Select = ({
  defaultValue,
  onChange,
  options = [],
  placeHolder = "",
}) => {
  const [value, setValue] = useState(defaultValue);
  const [isOpened, setIsOpened] = useState(false);
  const selectRef = useRef();
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !selectRef.current?.contains(event.target) &&
        !menuRef.current?.contains(event.target)
      ) {
        setIsOpened(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => setIsOpened(!isOpened)}
        ref={selectRef}
        className={styles.select}
      >
        {options.find(({ key }) => key === value)?.title || placeHolder}
      </button>
      <SelectPortal visible={isOpened} onClose={() => setIsOpened(false)}>
        <div
          ref={menuRef}
          className={styles.menu}
          style={
            isOpened
              ? {
                  top: selectRef.current?.getBoundingClientRect().bottom,
                  left: selectRef.current?.getBoundingClientRect().left,
                  width: selectRef.current?.getBoundingClientRect().width,
                }
              : undefined
          }
        >
          <button
            key={-1}
            onClick={() => {
              setValue("");
              onChange("");
              setIsOpened(false);
            }}
            className={styles.option}
          >
            Не выбран
          </button>
          {options.map(({ key, title }) => (
            <button
              key={key}
              onClick={() => {
                setValue(key);
                onChange(key);
                setIsOpened(false);
              }}
              className={styles.option}
            >
              {title}
            </button>
          ))}
        </div>
      </SelectPortal>
    </div>
  );
};
