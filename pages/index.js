import { useEffect } from "react";
import { useActions } from "@hooks/useActions";
import { useSelector } from "react-redux";
import Layout from "@components/Layout/Layout";
import ActivityIndicator from "@components/UI/ActivityIndicator";
import BookGrid from "@components/books/BookGrid";

export default function Home() {
  const { isLoading } = useSelector((state) => state.status);
  const { getBooks, getUser } = useActions();
  useEffect(() => {
    getBooks();
    getUser();
  }, []);

  if (isLoading) {
    return <ActivityIndicator type="bounce" color="salmon" size={25} />;
  }
  return (
    <Layout>
      <h1>Index Page</h1>
      <BookGrid />
      <p>{isLoading.toString()}</p>
    </Layout>
  );
}
