import { useState, useEffect } from "react";
import Layout from "@components/Layout/Layout";
import styles from "@styles/Login.module.css";
import { useSelector } from "react-redux";
import { useActions } from "@hooks/useActions";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { login } = useActions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  }, [router.pathname]);

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
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };
  return (
    <Layout title="Login">
      <div className={styles.center}>
        <h1>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
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
          <button type="submit" className={styles.btnPrimary}>
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
}
