import React from "react";
import styles from "./Select.module.scss";
import clsx from "clsx";

const Select = ({
  options,
  value,
  name,
  onChange,
  label,
  placeholder = "Select an option",
  required = false,
  error,
  disabled = false,
}) => {
  return (
    <span className={styles.selectWrapper}>
      {label && (
        <label className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={clsx(styles.selectBox, error ? styles.selectError : "")}
        disabled={disabled}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </span>
  );
};

export default Select;
