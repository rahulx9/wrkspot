import React from "react";
import styles from "./Input.module.scss";
import { clsx } from "clsx";

const Input = ({
  type = "text",
  value,
  name,
  onChange,
  placeholder,
  label,
  required = false,
  error,
  onBlur,
  className,
}) => {
  return (
    <span className={styles.inputWrapper}>
      {label && (
        <label className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={clsx(
          styles.inputField,
          className,
          error && styles.inputError
        )}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </span>
  );
};

export default Input;
