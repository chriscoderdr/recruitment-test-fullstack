import { FormEvent } from "react";
import style from "./form.module.css";

type IFormProps = {
  children: any;
  onSubmit?: () => void;
};

export const Form = ({ children, onSubmit }: IFormProps) => {
  const submit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form className={style.form} onSubmit={submit}>
      {children}
    </form>
  );
};
