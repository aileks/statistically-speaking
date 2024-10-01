import { useLoaderData } from 'react-router-dom';
import AllPosts from './Posts/AllPosts.jsx';

export default function Index() {
  const posts = useLoaderData();

  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
}
