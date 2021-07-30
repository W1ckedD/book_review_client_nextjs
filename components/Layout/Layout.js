import Navbar from '@components/Layout/Navbar';
import styles from '@styles/Layout/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}
