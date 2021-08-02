import styles from '@styles/books/BookGridItem.module.css';

export default function BookGridItem({ book: { title, images } }) {
  
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <img src={images[0].image}/>
    </div>
  )
}
