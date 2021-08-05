import Layout from "@components/Layout/Layout";
import ActivityIndicator from "@components/UI/ActivityIndicator";
import { useSelector } from "react-redux";

export default function Dashboard() {

  const { user } = useSelector((state) => state.auth);
  if ( !user) {
    return <ActivityIndicator type="bounce" color="salmon" size={25} />;
  }
  console.log(user);
  const { profile: { first_name, last_name, img_url }, username } = user;
  return (
    <Layout title="Dashboard">
      <h3>Welcome {first_name} {last_name}</h3>
    </Layout>
  );
}
