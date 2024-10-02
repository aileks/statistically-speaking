import { useLoaderData } from 'react-router-dom';
import AllPosts from './Posts/AllPosts.jsx';
import PostForm from './PostForm/index.js';

export default function Index() {
  const posts = useLoaderData();

  return (
    <>
      <PostForm />
      <AllPosts posts={posts} />
    </>
  );
}
