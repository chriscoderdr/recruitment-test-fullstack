import styles from "./text-field.module.css";

type ITextFieldProps = {
  type?: "text" | "password";
  placeholder?: string;
};

export const TextField = ({ type = "text", placeholder }: ITextFieldProps) => {
  return (
    <input
      className={styles.text_field}
      type={type}
      placeholder={placeholder}
    />
  );
};
