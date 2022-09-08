import { useEffect } from "react";
import styles from "./top-nav.module.css";

const TopNav = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <header className={styles.topNavHeader}>
      <img
        className={styles.vectorIcon}
        alt="burgerlogo"
        src="../vector.svg"
        data-animate-on-scroll
      />
      <h1 className={styles.happymenuH1}>Happymenu</h1>
    </header>
  );
};

export default TopNav;
