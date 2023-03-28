import { FormFieldError } from "@app/models/models";
import { FormEvent, MutableRefObject, Ref } from "react";
import style from "./form.module.css";
import React from "react";

type IFormProps = {
  children: any;
  onSubmit?: () => void;
  errors?: FormFieldError[];
};
export const Form = React.forwardRef(function Form(
  { children, onSubmit, errors }: IFormProps,
  ref?: any
) {
  const submit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form className={style.form} onSubmit={submit} ref={ref}>
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
});
