import { useMemo } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SaveIcon from '../SaveIcon/index.js';

export default function MyProfile() {
  const allPosts = useLoaderData();
  const user = useSelector(state => state.session.user);

  const userSaves = useMemo(() => {
    return allPosts.filter(post =>
      post.saves.some(save => save.userId === user.id)
    );
  }, [allPosts, user.id]);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div className='container mx-auto px-4'>
      <h2 className='text-2xl font-bold mb-4'>Profile</h2>

      {userSaves.length === 0 ?
        <h3 className='text-center mt-8'>
          You haven&apos;t saved any posts yet!
        </h3>
      : <h3>Saved Posts</h3>}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {userSaves.map(post => (
          <Link
            key={post.id}
            className='card relative'
            to={`/post/${post.id}`}
          >
            <div className='w-fit absolute top-3 right-3'>
              <SaveIcon
                post={post}
                user={user}
              />
            </div>

            <h3 className='text-xl font-semibold mb-2'>{post.title}</h3>

            <p className='text-gray-600 overflow-hidden'>
              {truncateText(post.body, 100)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
