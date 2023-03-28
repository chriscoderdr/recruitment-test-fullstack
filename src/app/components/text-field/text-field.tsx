import { ChangeEvent } from "react";
import styles from "./text-field.module.css";
import { debounce } from "debounce";

type ITextFieldProps = {
  type?: "text" | "password" | "number";
  placeholder?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  onBlur?: (value: string) => void;
  step?: string;
  readOnly?: boolean
};

export const TextField = ({
  type = "text",
  placeholder,
  onChange,
  required,
  onBlur,
  step,
  readOnly
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
      autoComplete="off"
      className={styles.text_field}
      type={type}
      placeholder={placeholder}
      onChange={change}
      onBlur={blur}
      required={required}
      step={step}
      readOnly={readOnly}
    />
  );
};
