import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllPosts from './Posts/AllPosts.jsx';
import PostForm from './PostForm/index.js';

export default function Index() {
  const loadedPosts = useLoaderData();
  const [posts, setPosts] = useState(loadedPosts);

  const refetchPosts = async () => {
    const res = await fetch('/api/posts');
    const updatedPosts = await res.json();
    setPosts(updatedPosts);
  };

  return (
    <>
      <PostForm onPostSubmit={refetchPosts} />
      <AllPosts posts={posts} />
    </>
  );
}
