import styles from "./text-field.module.css";

export const TextField = ({ type, placeholder }) => {
  return (
    <input className={styles.text_field} type={type} placeholder={placeholder} />
  );
};
