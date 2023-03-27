import style from "./button.module.css";

type IButtonProps = {
  value?: string;
  onClick?: () => void;
  type?: "submit" | "button";
};

export const Button = ({ value, onClick, type = "button" }: IButtonProps) => {
  return (
    <input
      className={style.button}
      type={type}
      value={value}
      onClick={onClick}
    />
  );
};
