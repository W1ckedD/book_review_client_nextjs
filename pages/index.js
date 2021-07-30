import Layout from '@components/Layout/Layout'
import ActivityIndicator from '@components/UI/ActivityIndicator';
import { useSelector } from 'react-redux';

export default function Home() {
  const { isLoading } = useSelector(state => state.status);

  if (isLoading) {
    return <ActivityIndicator type="bounce" color="salmon" size={25}/>
  }
  return (
    <Layout>
      <h1>Index Page</h1>
      <p>{ isLoading.toString() }</p>
    </Layout>
  )
}
