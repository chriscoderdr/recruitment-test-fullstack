"use client";

import styles from "./icon.module.css";

type IIconProps = {
  icon: Icon;
  onClick?: () => void;
};

type Icon = "forward" | "backward";

export const Icon = ({ icon, onClick }: IIconProps) => {
  const className = styles["icon_" + icon];
  return <span className={`${styles.icon} ${className}`} onClick={onClick} />;
};
