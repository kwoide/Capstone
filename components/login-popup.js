import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./login-popup.module.css";

const LoginPopup = ({ onClose }) => {
  const router = useRouter();

  const onUsernameInputButtonClick = useCallback(() => {
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
    <div className={styles.loginPopupDiv} data-animate-on-scroll>
      <form className={styles.form}>
        <input
          className={styles.usernameInput}
          type="text"
          placeholder="Username"
          minLength={1}
          required
          autoFocus
        />
        <input
          className={styles.usernameInput1}
          type="password"
          placeholder="Password"
          minLength={1}
          required
        />
        <button
          className={styles.usernameInputButton}
          onClick={onUsernameInputButtonClick}
        >
          <b className={styles.submitButton}>Login</b>
        </button>
        <a className={styles.forgotPassword}>forgot password?</a>
      </form>
    </div>
  );
};

export default LoginPopup;
