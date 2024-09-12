import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

const Button = ({
  className,
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  isLoading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(className, styles.button, styles[variant], disabled || isLoading ? styles.disabled : "")}
      disabled={disabled || isLoading}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
