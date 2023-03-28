import { ChangeEvent } from "react";
import styles from "./text-field.module.css";
import { debounce } from "debounce";

type ITextFieldProps = {
  type?: "text" | "password";
  placeholder?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  onBlur?: (value: string) => void;
};

export const TextField = ({
  type = "text",
  placeholder,
  onChange,
  required,
  onBlur,
}: ITextFieldProps) => {
  const change = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      debounce(() => onChange?.(event.target.value), 300)();
    }
  };

  const blur = (event: ChangeEvent<HTMLInputElement>) => {
    onBlur?.(event?.target.value);
  };

  return (
    <input
      className={styles.text_field}
      type={type}
      placeholder={placeholder}
      onChange={change}
      onBlur={blur}
      required={required}
    />
  );
};
