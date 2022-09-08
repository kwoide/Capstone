import { useState, useCallback, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import AddMenuPopup from "../components/add-menu-popup";
import PortalPopup from "../components/portal-popup";
import styles from "./add-restaurant-form.module.css";

const AddRestaurantForm = () => {
  const router = useRouter();
  const [isAddMenuPopupOpen, setAddMenuPopupOpen] = useState(false);

  const onVectorIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const openAddMenuPopup = useCallback(() => {
    setAddMenuPopupOpen(true);
  }, []);

  const closeAddMenuPopup = useCallback(() => {
    setAddMenuPopupOpen(false);
  }, []);
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
      <div className={styles.addRestaurantFormDiv}>
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
          <form className={styles.form}>
            <TextField
              className={styles.usernameInputTextField}
              sx={{ width: 247 }}
              color="primary"
              variant="outlined"
              type="text"
              label="Name of the restaurant"
              size="medium"
              margin="none"
              required
            />
            <FormControl
              className={styles.typeOfCuisineInputFormControl}
              sx={{ width: 247 }}
              variant="outlined"
              required
            >
              <InputLabel color="primary">Cuisine</InputLabel>
              <Select color="primary" size="medium" label="Cuisine">
                <MenuItem value="Italian Cuisine">Italian Cuisine</MenuItem>
                <MenuItem value="Thai Cuisine">Thai Cuisine</MenuItem>
                <MenuItem value="French Cuisine">French Cuisine</MenuItem>
                <MenuItem value="Japanese Cuisine">Japanese Cuisine</MenuItem>
                <MenuItem value="Lebanese Cuisine">Lebanese Cuisine</MenuItem>
                <MenuItem value="Spanish Cuisine">Spanish Cuisine</MenuItem>
                <MenuItem value="German Cuisine">German Cuisine</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              className={styles.pricelevelInputFormControl}
              sx={{ width: 247 }}
              variant="outlined"
              required
            >
              <InputLabel color="primary">Pricelevel</InputLabel>
              <Select color="primary" size="medium" label="Pricelevel">
                <MenuItem value="$">$</MenuItem>
                <MenuItem value="$$">$$</MenuItem>
                <MenuItem value="$$$">$$$</MenuItem>
                <MenuItem value="$$$$">$$$$</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <TextField
              className={styles.adressInputTextField}
              sx={{ width: 247 }}
              color="primary"
              variant="outlined"
              type="text"
              label="Adress"
              size="medium"
              margin="none"
              required
            />
            <TextField
              className={styles.descriptionInputTextField}
              sx={{ width: 247 }}
              color="primary"
              variant="outlined"
              type="text"
              label="Description"
              size="medium"
              margin="none"
              required
            />
            <TextField
              className={styles.descriptionInputTextField1}
              sx={{ width: 247 }}
              color="primary"
              variant="outlined"
              type="tel"
              label="Contact Number"
              size="medium"
              margin="none"
              required
            />
            <Button
              className={styles.buttonSubmit}
              sx={{ width: 247 }}
              variant="contained"
              color="primary"
              onClick={openAddMenuPopup}
            >
              Add Menu
            </Button>
            <Button
              className={styles.buttonCancel}
              sx={{ width: 270 }}
              variant="contained"
              color="error"
            >
              Cancel
            </Button>
          </form>
        </main>
      </div>
      {isAddMenuPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddMenuPopup}
        >
          <AddMenuPopup onClose={closeAddMenuPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default AddRestaurantForm;
