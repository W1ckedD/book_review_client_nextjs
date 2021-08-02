import { useSelector } from "react-redux";
import styles from "@styles/books/BookGrid.module.css";
import BookGridItem from "./BookGridItem";

export default function BookGrid() {
  const { books } = useSelector((state) => state.books);
  console.log(books);
  return (
    <div className={styles.grid}>
      {books.map((book) => (
        <BookGridItem key={book.id} book={book} />
      ))}
    </div>
  );
}
