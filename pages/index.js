import { useEffect } from "react";
import { useActions } from "@hooks/useActions";
import { useSelector } from "react-redux";
import Layout from "@components/Layout/Layout";
import ActivityIndicator from "@components/UI/ActivityIndicator";
import BookGrid from "@components/books/BookGrid";

export default function Home() {

  const { getBooks, getUser } = useActions();
  useEffect(() => {
    getBooks();
    getUser();
  }, []);

  
  return (
    <Layout>
      <BookGrid />
    </Layout>
  );
}
