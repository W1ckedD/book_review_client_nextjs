import { useSelector } from "react-redux";
import styles from "@styles/books/BookGrid.module.css";
import BookGridItem from "./BookGridItem";
import ActivityIndicator from "@components/UI/ActivityIndicator";

export default function BookGrid() {
  const { loading, books } = useSelector((state) => state.books);

  if (loading) {
    return <ActivityIndicator />
  }
  return (
    <div className={styles.grid}>
      {books.map((book) => (
        <BookGridItem key={book.id} book={book} />
      ))}
    </div>
  );
}
