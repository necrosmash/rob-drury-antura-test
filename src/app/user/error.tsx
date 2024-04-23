"use client";

import { Button } from "@mui/material";
import { useEffect } from "react";
import styles from "./styles.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Error loading user!</h2>
      <div className={styles.buttonWrapper}>
        <Button
          className={styles.button}
          variant="contained"
          onClick={() => reset()}
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
