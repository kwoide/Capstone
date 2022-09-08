import { useCallback, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/router";
import TopNav from "../components/top-nav";
import styles from "./index.module.css";

const Homepage = () => {
  const router = useRouter();

  const onButtonb2bClick = useCallback(() => {
    router.push("/fuer-gastronomen");
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
    <div className={styles.homepageDiv}>
      <TopNav />
      <main className={styles.main}>
        <button
          className={styles.buttonb2b}
          onClick={onButtonb2bClick}
          data-animate-on-scroll
        >
          <b className={styles.fuerGastronomenB}>Für Gastronomen</b>
        </button>
        <button className={styles.buttonb2c} data-animate-on-scroll>
          <b className={styles.restaurantSuchenB}>Restaurant suchen</b>
        </button>
        <Player
          className={styles.lottiePlayer}
          autoplay
          src="https://assets7.lottiefiles.com/packages/lf20_p1bmwqtk.json"
          loop
        />
      </main>
    </div>
  );
};

export default Homepage;
