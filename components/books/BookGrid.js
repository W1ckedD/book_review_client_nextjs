import { useSelector } from 'react-redux';
import styles from '@styles/books/BookGrid.module.css';

export default function BookGrid() {
  const { books } = useSelector(state => state.books);
  
  return (
    <div className={styles.grid}>
      <h3>{books.length}</h3>
    </div>
  )
}
