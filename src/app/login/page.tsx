"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "../styles/login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    if (email === "test@example.com" && password === "password123") {
      router.push("/dashboard"); // Navigate to the dashboard
    } else {
      console.log("Email: " + email + "\nContrasena: " + password);
      setError("Invalid email or password");
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <h2>Login</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
