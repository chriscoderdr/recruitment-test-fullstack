import style from "./form.module.css";

export const Form = ({ children, onSubmit }) => {
  const submit = (e) => {
    e.preventDefault();
  };

  return <form className={style.form} onSubmit={submit}>{children}</form>;
};
