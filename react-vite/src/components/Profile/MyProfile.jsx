import { useEffect, useMemo } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SaveIcon from '../SaveIcon/index.js';
import { thunkRefreshUser } from '../../redux/session.js';

export default function MyProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allPosts = useLoaderData();
  const user = useSelector(state => state.session.user);

  useEffect(() => {
    if (!user) {
      navigate('/');
    } else {
      dispatch(thunkRefreshUser());
    }
  }, [navigate, dispatch]);

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
      <main className='md:ml-[25%] lg:ml-[16.66%]'>
        <h2 className='mb-1 text-xl font-semibold'>Profile</h2>

        <h4 className='mb-4 text-gray-500'>
          <span>
            {user?.followCount}{' '}
            {user?.followCount === 1 ? 'Follower' : 'Followers'}
            {' • '}
          </span>

          <Link
            to='/following'
            className='text-blue-600 transition-all duration-200 hover:text-blue-800 hover:underline'
          >
            Following ({user?.following.length})
          </Link>
        </h4>

        {userSaves.length === 0 ?
          <h3 className='mt-8 text-center text-gray-600'>
            You haven&apos;t saved any posts yet!
          </h3>
        : <h3 className='mb-4 text-lg font-semibold'>Saved Posts</h3>}

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {userSaves.map(post => (
            <Link
              key={post.id}
              className='relative rounded-lg bg-white p-5 shadow transition-all duration-200 hover:shadow-lg'
              to={`/post/${post.id}`}
            >
              <div className='absolute top-2 right-2'>
                <SaveIcon
                  post={post}
                  user={user}
                />
              </div>

              <h3 className='mb-2 text-lg font-semibold leading-snug'>
                {post.title}
              </h3>

              <p className='leading-relaxed text-gray-600'>
                {truncateText(post.body, 80)}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
