import { FormFieldError } from "@components/app/models/models";
import { FormEvent } from "react";
import style from "./form.module.css";

type IFormProps = {
  children: any;
  onSubmit?: () => void;
  errors?: FormFieldError[];
};

export const Form = ({ children, onSubmit, errors }: IFormProps) => {
  const submit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form className={style.form} onSubmit={submit}>
      {errors && errors.length > 0 && (
        <div className={style.errors}>
          {errors.map((error, index) => (
            <p key={index + ""} className={style.error}>
              {error.message}
            </p>
          ))}
        </div>
      )}

      {children}
    </form>
  );
};
