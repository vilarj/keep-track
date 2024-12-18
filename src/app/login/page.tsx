"use client";
import Image from "next/image";
import { useState } from "react";
import image from "../../../public/KeepTrack.png";
import styles from "../styles/login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <section className={styles.login}>
      <Image
        priority
        src={image}
        height={150}
        width={350}
        alt="KeepTrack Logo"
      />

      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default Login;
