import { useEffect } from "react";
import { Button } from "@mui/material";
import styles from "./preview-popup.module.css";

const PreviewPopup = ({ onClose }) => {
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
    <div className={styles.previewPopupDiv} data-animate-on-scroll>
      <article className={styles.inputPreviewPopupArticle}>
        <div className={styles.nameOfTheDish}>Name of the dish</div>
        <div className={styles.padThaiDiv}>Pad Thai</div>
        <div className={styles.seperatorDiv} />
        <div className={styles.priceDiv}>Price ($)</div>
        <div className={styles.div}>12.50</div>
        <div className={styles.seperatorDiv1} />
        <div className={styles.typeDiv}>Type</div>
        <div className={styles.mainDiv}>Main</div>
        <div className={styles.seperatorDiv2} />
        <div className={styles.discriptionDiv}>Discription</div>
        <div className={styles.padThaiIsStirFryDishMade}>
          Pad Thai is stir-fry dish made with rice noodles, shrimp, chicken, or
          tofu, peanuts, a scrambled egg and bean sprouts.
        </div>
        <div className={styles.seperatorDiv3} />
        <Button
          className={styles.buttonBackToMenu}
          sx={{ width: 270 }}
          variant="contained"
          color="error"
        >
          Back to menu
        </Button>
      </article>
    </div>
  );
};

export default PreviewPopup;
