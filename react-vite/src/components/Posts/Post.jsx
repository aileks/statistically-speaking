import { useLoaderData } from 'react-router-dom';

export default function Post() {
  const post = useLoaderData();

  return (
    <div className='container'>
      <div className='mt-14 card'>
        <h2 className='text-2xl font-bold underline'>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
