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
      <h2 className='mb-4 text-2xl font-bold'>Profile</h2>

      {userSaves.length === 0 ?
        <h3 className='mt-8 text-center'>
          You haven&apos;t saved any posts yet!
        </h3>
      : <h3>Saved Posts</h3>}

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {userSaves.map(post => (
          <Link
            key={post.id}
            className='relative card'
            to={`/post/${post.id}`}
          >
            <div className='absolute top-3 right-3 w-fit'>
              <SaveIcon
                post={post}
                user={user}
              />
            </div>

            <h3 className='mb-2 text-xl font-semibold'>{post.title}</h3>

            <p className='overflow-hidden text-gray-600'>
              {truncateText(post.body, 100)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
