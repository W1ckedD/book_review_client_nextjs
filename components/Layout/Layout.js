import Navbar from '@components/Layout/Navbar';
import styles from '@styles/Layout/Layout.module.css';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title || "Book Review"}</title>
      </Head>
      <Navbar />
      <ToastContainer />
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}
