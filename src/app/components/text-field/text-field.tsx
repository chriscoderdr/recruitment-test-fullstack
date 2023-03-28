import { ChangeEvent } from "react";
import styles from "./text-field.module.css";

type ITextFieldProps = {
  type?: "text" | "password";
  placeholder?: string;
  onChange?: (value: string) => void;
  required?: boolean
};

export const TextField = ({
  type = "text",
  placeholder,
  onChange,
  required
}: ITextFieldProps) => {
  const change = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <input
      className={styles.text_field}
      type={type}
      placeholder={placeholder}
      onBlur={change}
      required={required}
    />
  );
};
