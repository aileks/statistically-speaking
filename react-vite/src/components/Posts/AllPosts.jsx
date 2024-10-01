import { Link } from 'react-router-dom';

export default function AllPosts({ posts }) {
  return (
    <div className='container'>
      <h2 className='text-2xl font-bold'>Your Feed</h2>

      {posts.length &&
        posts.map(post => (
          <Link
            to={`/post/${post.id}`}
            key={post.id}
          >
            <div className='card'>
              <h3 className='text-lg font-bold underline'>{post.title}</h3>
              <p className='text-sm'>{post.body}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
