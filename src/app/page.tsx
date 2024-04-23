import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      test
      <Button variant="contained">Contained</Button>
    </main>
  );
}
