import { useLoaderData } from 'react-router-dom';

export default function Post() {
  const post = useLoaderData();
  console.log(post);

  return (
    <div className='mt-14 flex flex-col items-center justify-center space-y-2'>
      <h2 className='text-2xl font-bold underline'>{post.title}</h2>
      <p className='max-w-xl'>{post.body}</p>
    </div>
  );
}
