import { ChangeEvent } from "react";
import styles from "./text-field.module.css";

type ITextFieldProps = {
  type?: "text" | "password";
  placeholder?: string;
  onChange?: (value: string) => void;
};

export const TextField = ({
  type = "text",
  placeholder,
  onChange,
}: ITextFieldProps) => {
  const change = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <input
      className={styles.text_field}
      type={type}
      placeholder={placeholder}
      onChange={change}
    />
  );
};
