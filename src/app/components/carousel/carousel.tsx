"use client";

import styles from "./carousel.module.css";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { CarouselControls } from "../product-carousel/carousel-controls/carousel-controls";

type ICarouselProps = {
  children: ReactNode | ReactNode[];
  firstElement: any;
  gap: number;
};

export const Carousel = ({ children, firstElement, gap }: ICarouselProps) => {
  const [offset, setOffset] = useState(0);

  const [pause, setPause] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const itemRef = useRef<HTMLDivElement>(null);

  const getItemWidth = () => {
    return itemRef.current == null ? 0 : itemRef.current.clientWidth + gap;
  };

  const getContainerWidth = () => {
    return containerRef.current == null ? 0 : containerRef.current.clientWidth;
  };

  const getItemsPerPage = () => {
    return getContainerWidth() / getItemWidth();
  };

  const totalOfPages = () => {
    return (React.Children.count(children) + 1) / getItemsPerPage();
  };

  const updateOffset = (newOffset: number) => {
    let offset = newOffset;
    if (
      newOffset > (getItemWidth() * getItemsPerPage() * totalOfPages()) * 0.8 ||
      newOffset < 0
    ) {
      offset = 0;
    }
    setOffset(offset);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        updateOffset(offset + getItemWidth());
      }
    }, 1600);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const getItemPosition = (index: number) => {
    return offset * -1;
  };

  const onMouseOver = () => {
    setPause(true);
  };

  const onMouseLeave = () => {
    setPause(false);
  };

  const onMoveForward = () => {
    updateOffset(offset + getItemWidth());
  };

  const onMoveBackward = () => {
    updateOffset(offset - getItemWidth());
  };

  return (
    <div
      className={styles.carousel_list}
      ref={containerRef}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div
        ref={itemRef}
        style={{
          transform: "translateX(" + getItemPosition(0) + "px)",
        }}
        className={styles.carousel_item}
      >
        {firstElement()}
      </div>
      {React.Children.map(children, (child) => {
        return (
          <div
            className={styles.carousel_item}
            style={{
              transform: "translateX(" + getItemPosition(0) + "px)",
            }}
          >
            {child}
          </div>
        );
      })}
      <CarouselControls
        onMoveBackward={onMoveBackward}
        onMoveForward={onMoveForward}
      />
    </div>
  );
};
