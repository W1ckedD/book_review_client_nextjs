import { useState } from "react";
import Layout from "@components/Layout/Layout";
import styles from "@styles/Login.module.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <Layout title="Login">
      <div className={styles.center}>
        <h1>Login</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label>Username</label>
            <input
              className={styles.formControl}
              name="username"
              type="text"
              onChange={handleChange}
              value={username}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              className={styles.formControl}
              name="password"
              type="password"
              onChange={handleChange}
              value={password}
            />
          </div>
          <button type="submit" className={styles.btnPrimary}>Login</button>
        </form>
      </div>
    </Layout>
  );
}
