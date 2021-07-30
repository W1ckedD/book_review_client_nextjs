import Layout from "@components/Layout/Layout";
import styles from "@styles/Error.module.css";
import { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { toast } from "react-toastify";

export default function error() {
  useEffect(() => {
    toast.error("Something went Wrong!");
  }, []);
  return (
    <Layout title="Something Went Wrong!">
      <div className={styles.center}>
        <h2>
          <span>
            <FaExclamationTriangle />
          </span>
          <span> </span>
          Something Went Wrong!
        </h2>
      </div>
    </Layout>
  );
}
