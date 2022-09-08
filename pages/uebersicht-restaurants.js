import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./uebersicht-restaurants.module.css";

const UebersichtRestaurants = () => {
  const router = useRouter();

  const onVectorIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/detail-seite-restaurant");
  }, [router]);

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
    <div className={styles.uebersichtRestaurantsDiv}>
      <header className={styles.topNavHeader}>
        <img
          className={styles.vectorIcon}
          alt="burgerlogo"
          src="../vector.svg"
          onClick={onVectorIconClick}
          data-animate-on-scroll
        />
        <h1 className={styles.happymenuH1}>Happymenu</h1>
      </header>
      <main className={styles.main}>
        <section
          className={styles.frameSection}
          onClick={onFrameContainerClick}
        >
          <b className={styles.thaiCowboys}>Thai Cowboys</b>
          <b className={styles.thaiCuisineB}>Thai Cuisine</b>
          <b className={styles.b}>$$</b>
        </section>
        <section className={styles.frameSection1}>
          <b className={styles.thaiCowboys}>Thai Cowboys</b>
          <b className={styles.thaiCuisineB}>Thai Cuisine</b>
          <b className={styles.b}>$$</b>
        </section>
        <section className={styles.frameSection2}>
          <b className={styles.thaiCowboys}>Thai Cowboys</b>
          <b className={styles.thaiCuisineB}>Thai Cuisine</b>
          <b className={styles.b}>$$</b>
        </section>
        <section className={styles.frameSection3}>
          <b className={styles.thaiCowboys}>Thai Cowboys</b>
          <b className={styles.thaiCuisineB}>Thai Cuisine</b>
          <b className={styles.b}>$$</b>
        </section>
        <section className={styles.frameSection4}>
          <b className={styles.thaiCowboys}>Thai Cowboys</b>
          <b className={styles.thaiCuisineB}>Thai Cuisine</b>
          <b className={styles.b}>$$</b>
        </section>
      </main>
    </div>
  );
};

export default UebersichtRestaurants;
