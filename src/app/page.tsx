"use client";
import Login from "./login/page";
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Login />
    </div>
  );
}
