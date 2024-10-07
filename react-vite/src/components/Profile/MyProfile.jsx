import { useMemo } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SaveIcon from '../SaveIcon/index.js';
import { RiUserFollowFill } from 'react-icons/ri';

export default function MyProfile() {
  const navigate = useNavigate();
  const allPosts = useLoaderData();
  const user = useSelector(state => state.session.user);

  if (!user) {
    navigate('/');
  }

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
      <aside className='card w-1/6 bg-gray-100 absolute left-20'>
        <h3 className='text-lg font-bold mb-4'>Following</h3>
        {user.following.length > 0 ?
          <ul>
            {user.following.map(follow => (
              <li
                key={follow.id}
                className='mb-2'
              >
                <Link
                  to={`/profile/${follow.id}`}
                  className='text-blue-600 transition-all duration-200 hover:text-blue-800 hover:underline'
                >
                  <RiUserFollowFill className='text-2xl text-blue-600 inline-block mr-1' />
                  {follow.username}
                </Link>
              </li>
            ))}
          </ul>
        : <p className='text-gray-600'>You are not following anyone yet.</p>}
      </aside>

      <h2 className='mb-1'>Profile</h2>

      <h4 className='text-gray-500 mb-4'>
        {user?.followCount} {user?.followCount === 1 ? 'Follower' : 'Followers'}
      </h4>

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
