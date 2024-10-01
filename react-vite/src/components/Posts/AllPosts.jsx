import { Link } from 'react-router-dom';

export default function AllPosts({ posts }) {
  console.log(posts);
  return (
    <div className='mx-96 mt-14'>
      <h2 className='text-2xl font-bold'>Your Feed</h2>

      {posts.length &&
        posts.map(post => (
          <Link
            to={`/post/${post.id}`}
            key={post.id}
          >
            <div className='my-4 rounded-md border border-gray-300 px-2 py-4'>
              <h3 className='text-lg font-bold underline'>{post.title}</h3>
              <p className='text-sm'>{post.body}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
weqr;
