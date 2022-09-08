import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./detail-seite-restaurant.module.css";

const DetailSeiteRestaurant = () => {
  const router = useRouter();

  const onVectorIconClick = useCallback(() => {
    router.push("/");
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
    <div className={styles.detailSeiteRestaurantDiv}>
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
        <h1 className={styles.thaiCowboysH1}>
          <span className={styles.thaiCoSpan}>Thai Co</span>
          <span className={styles.wSpan}>w</span>
          <span className={styles.thaiCoSpan}>boys</span>
        </h1>
        <h1 className={styles.mENUH1}>MENU</h1>
        <section className={styles.frameSection}>
          <p className={styles.typeOfCuisineThai}>
            <b>Type of Cuisine:</b>
            <span> Thai</span>
          </p>
          <p className={styles.pricelevel}>
            <b>Pricelevel:</b>
            <span> $$</span>
          </p>
          <p className={styles.adressFuhlsbttlerStrae16}>
            <p className={styles.springrollsWith}>
              <b className={styles.adressB}>Adress:</b>
              <span> Fuhlsbüttler Straße 168,</span>
            </p>
            <p className={styles.hamburgP}>
              <span>{`22309 Hamburg `}</span>
            </p>
          </p>
          <p className={styles.descriptionGreatThaiCuisin}>
            <b>Description:</b>
            <span> Great Thai-cuisine in the north of Hamburg</span>
          </p>
          <p className={styles.phone040123456789}>
            <b>Phone:</b>
            <span> 040 123 456 789</span>
          </p>
        </section>
        <section className={styles.frameSection1}>
          <p className={styles.starterP}>Starter</p>
          <p className={styles.mainP}>Main</p>
          <p className={styles.dessertP}>Dessert</p>
          <p className={styles.springrollsWithSweetAndSou}>
            <p className={styles.springrollsWith}>Springrolls with</p>
            <p className={styles.hamburgP}>{`sweet and sour sauce `}</p>
          </p>
          <p className={styles.p}>5.50 $</p>
          <p className={styles.thaiCucumberSaladWithPeanu}>
            Thai Cucumber Salad with Peanuts
          </p>
          <p className={styles.p1}>6.20 $</p>
          <p className={styles.thaiCornFritters}>{`Thai Corn Fritters `}</p>
          <p className={styles.p2}>8.50 $</p>
          <p className={styles.padThai}>Pad Thai</p>
          <p className={styles.p3}>17.50 $</p>
          <p className={styles.tomYumSoupWithCoconutMilk}>
            Tom Yum Soup With Coconut Milk (Tom Khaa)
          </p>
          <p className={styles.p4}>13.50 $</p>
          <p className={styles.thaiMangoStickyRiceKhaoN}>
            Thai Mango Sticky Rice (Khao Niaow Ma Muang)
          </p>
          <p className={styles.p5}>9.50 $</p>
          <p className={styles.homemadeRolledIceCream}>
            Homemade Rolled Ice Cream
          </p>
          <p className={styles.homemadeRolledIceCream}>
            Homemade Rolled Ice Cream
          </p>
          <p className={styles.p6}>7.50 $</p>
          <p className={styles.thaiBananaSteamedCake}>
            Thai Banana Steamed Cake
          </p>
          <p className={styles.p7}>7.50 $</p>
          <p className={styles.thaiFilletOfFishBakedInB}>
            Thai Fillet of Fish Baked in Banana Leaf
          </p>
          <p className={styles.p8}>21.50 $</p>
        </section>
      </main>
    </div>
  );
};

export default DetailSeiteRestaurant;
