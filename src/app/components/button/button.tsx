import style from "./button.module.css";

export const Button = ({ value, onClick }) => {
  return (
    <input
      className={style.button}
      type="button"
      value={value}
      onClick={onClick}
    />
  );
};
