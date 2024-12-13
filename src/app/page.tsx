"use client";
import LandingPage from "./landing/page";
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.app}>
      <LandingPage />
    </div>
  );
}
