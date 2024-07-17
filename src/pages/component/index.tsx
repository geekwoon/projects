import React, { useState, useEffect, useRef } from "react";
import styles from "./index.less";


const Carousel = ({ content, interval = 3000 }) => {
  const [index, setIndex] = useState(0);
  let timerRef = useRef<string | number | NodeJS.Timeout | undefined>();
  const contentArray = content;

  useEffect(() => {
    if (contentArray.length > 1) {
      timerRef.current = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
      }, interval);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [contentArray.length, interval]);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? contentArray.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
  };

  console.log('current = ', contentArray[index])
  return (
    <div className={styles.container}>
      {contentArray.length > 1 && (
        <div className={styles.leftArrow}>
          <div className={styles.arrow} onClick={handlePrev}></div>
        </div>
      )}
      <div className={styles.content}>{contentArray[index]}</div>
      {contentArray.length > 1 && (
        <div className={styles.rightArrow}>
          <div className={styles.arrow} onClick={handleNext}></div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
