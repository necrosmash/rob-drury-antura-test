import { CircularProgress } from "@mui/material";
import styles from "./styles.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <CircularProgress />
    </div>
  );
}
