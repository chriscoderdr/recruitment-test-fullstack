"use client";

import styles from "./carousel-controls.module.css";

import { Icon } from "../../icon/icon";

type ICarouselControlsProps = {
  onMoveBackward: () => void;
  onMoveForward: () => void;
};

export const CarouselControls = ({
  onMoveBackward,
  onMoveForward,
}: ICarouselControlsProps) => {
  return (
    <div className={styles.controls}>
      <Icon icon="backward" onClick={onMoveBackward} />
      <Icon icon="forward" onClick={onMoveForward} />
    </div>
  );
};
