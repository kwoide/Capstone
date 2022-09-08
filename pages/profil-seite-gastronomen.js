import { useCallback, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/router";
import styles from "./profil-seite-gastronomen.module.css";

const ProfilSeiteGastronomen = () => {
  const router = useRouter();

  const onVectorIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onButtonAddRestaurantClick = useCallback(() => {
    router.push("/add-restaurant-form");
  }, [router]);

  const onButtonEditRestaurantClick = useCallback(() => {
    router.push("/profil-seite-gastronomen");
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
    <div className={styles.profilSeiteGastronomenDiv}>
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
        <Player
          className={styles.lottiePlayer}
          autoplay
          src="https://assets9.lottiefiles.com/private_files/lf30_UlXgnV.json"
          loop
        />
        <button
          className={styles.buttonAddRestaurant}
          onClick={onButtonAddRestaurantClick}
          data-animate-on-scroll
        >
          <b className={styles.restaurantHinzufgenB}>Restaurant hinzufügen</b>
        </button>
        <button
          className={styles.buttonEditRestaurant}
          onClick={onButtonEditRestaurantClick}
          data-animate-on-scroll
        >
          <b className={styles.restaurantBearbeiten}>Restaurant bearbeiten</b>
        </button>
      </main>
    </div>
  );
};

export default ProfilSeiteGastronomen;
