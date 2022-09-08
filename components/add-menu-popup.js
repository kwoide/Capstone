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
import LoginPopup from "../components/login-popup";
import PortalPopup from "../components/portal-popup";
import PreviewPopup from "../components/preview-popup";
import styles from "./add-menu-popup.module.css";

const AddMenuPopup = ({ onClose }) => {
  const router = useRouter();
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isPreviewPopupOpen, setPreviewPopupOpen] = useState(false);

  const onButtonSubmitClick = useCallback(() => {
    router.push("/uebersicht-restaurants");
  }, [router]);

  const openLoginPopup = useCallback(() => {
    setLoginPopupOpen(true);
  }, []);

  const closeLoginPopup = useCallback(() => {
    setLoginPopupOpen(false);
  }, []);

  const openPreviewPopup = useCallback(() => {
    setPreviewPopupOpen(true);
  }, []);

  const closePreviewPopup = useCallback(() => {
    setPreviewPopupOpen(false);
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
      <div className={styles.addMenuPopupDiv} data-animate-on-scroll>
        <form className={styles.form}>
          <TextField
            className={styles.dishNameInputTextField}
            sx={{ width: 270 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Name of the dish"
            size="medium"
            margin="none"
            required
          />
          <TextField
            className={styles.priceInputTextField}
            sx={{ width: 270 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Price ($)"
            size="medium"
            margin="none"
            required
          />
          <FormControl
            className={styles.typeInputFormControl}
            sx={{ width: 270 }}
            variant="outlined"
            required
          >
            <InputLabel color="primary">Type</InputLabel>
            <Select color="primary" size="medium" label="Type">
              <MenuItem value="starter">starter</MenuItem>
              <MenuItem value="main">main</MenuItem>
              <MenuItem value="dessert">dessert</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <TextField
            className={styles.decriptionInputTextField}
            sx={{ width: 270 }}
            color="primary"
            variant="outlined"
            multiline
            rows={3}
            maxRows={5}
            label="Description"
            margin="none"
            required
          />
          <Button
            className={styles.buttonSubmit}
            sx={{ width: 270 }}
            variant="contained"
            color="primary"
            onClick={onButtonSubmitClick}
          >
            Submit
          </Button>
          <Button
            className={styles.buttonCancel}
            sx={{ width: 270 }}
            variant="contained"
            color="error"
          >
            Cancel
          </Button>
          <button className={styles.frameButton}>
            <div className={styles.div}>+</div>
            <button className={styles.addMoreDiishes} onClick={openLoginPopup}>
              Add more diishes
            </button>
          </button>
          <button className={styles.frameButton1} onClick={openPreviewPopup}>
            <button className={styles.previewButton}>Preview</button>
            <img
              className={styles.akarIconseye}
              alt=""
              src="../akariconseye.svg"
            />
          </button>
        </form>
      </div>
      {isLoginPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLoginPopup}
        >
          <LoginPopup onClose={closeLoginPopup} />
        </PortalPopup>
      )}
      {isPreviewPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePreviewPopup}
        >
          <PreviewPopup onClose={closePreviewPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default AddMenuPopup;
