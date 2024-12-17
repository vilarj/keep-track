"use client";
<<<<<<< HEAD
import Image from "next/image";
import { useState } from "react";
import image from "../../../public/KeepTrack.png";
=======
import { useState } from "react";
>>>>>>> d576516 (All routes work properly | Placeholders in place | TODO: Need to work on the login logic and the styling of all new placeholders)
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
<<<<<<< HEAD
      <Image
        priority
        src={image}
        height={150}
        width={350}
        alt="KeepTrack Logo"
      />

=======
      <h2>Login</h2>
>>>>>>> d576516 (All routes work properly | Placeholders in place | TODO: Need to work on the login logic and the styling of all new placeholders)
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
