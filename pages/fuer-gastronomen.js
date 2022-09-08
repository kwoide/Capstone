import { useState, useCallback, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/router";
import LoginPopup from "../components/login-popup";
import PortalPopup from "../components/portal-popup";
import styles from "./fuer-gastronomen.module.css";

const FuerGastronomen = () => {
  const router = useRouter();
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

  const onVectorIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const openLoginPopup = useCallback(() => {
    setLoginPopupOpen(true);
  }, []);

  const closeLoginPopup = useCallback(() => {
    setLoginPopupOpen(false);
  }, []);

  const onButtonLogin1Click = useCallback(() => {
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
    <>
      <div className={styles.fuerGastronomenDiv}>
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
            src="https://assets10.lottiefiles.com/packages/lf20_hsis9re9.json"
            loop
          />
          <button
            className={styles.buttonLogin}
            onClick={openLoginPopup}
            data-animate-on-scroll
          >
            <b className={styles.loginB}>login</b>
          </button>
          <button
            className={styles.buttonLogin1}
            onClick={onButtonLogin1Click}
            data-animate-on-scroll
          >
            <b className={styles.registrierenB}>registrieren</b>
          </button>
        </main>
      </div>
      {isLoginPopupOpen && (
        <PortalPopup
          overlayColor="rgba(112, 112, 112, 0.9)"
          placement="Centered"
          onOutsideClick={closeLoginPopup}
        >
          <LoginPopup onClose={closeLoginPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default FuerGastronomen;
