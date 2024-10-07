import { useLoaderData, useNavigate } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import FollowButton from '../FollowButton';

export default function UserProfile() {
  const navigate = useNavigate();
  const { user, posts } = useLoaderData();
  const currentUser = useSelector(state => state.session.user);

  if (user.id === currentUser.id) {
    navigate('/profile');
  }

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    user && (
      <div className='container'>
        <div className='card'>
          <section className='flex items-end justify-center gap-3'>
            <RxAvatar className='text-6xl text-blue-600' />

            <h2 className='text-gray-800'>
              {user?.firstName} {user?.lastName}
            </h2>
          </section>

          <p className='mb-0 text-center text-gray-400'>
            {user?.followersCount}{' '}
            {user?.followersCount === 1 ? 'Follower' : 'Followers'}
          </p>

          <section className='mb-4 flex justify-center gap-4 border-b border-amber-400 pb-2'>
            <h4 className='text-gray-600'>{user?.field}</h4>
            <h4 className='text-gray-600'>{user?.email}</h4>
          </section>

          {currentUser && (
            <FollowButton
              userId={user?.id}
              currentUser={currentUser}
            />
          )}

          <section className='mt-4 mb-0'>
            <h3 className='mb-0 underline'>About Me</h3>
            <p className='font-medium text-gray-800'>{user.bio}</p>
          </section>
        </div>

        <section className='mt-1'>
          <h2 className='underline'>Recent Posts</h2>

          {posts.length > 0 ?
            posts?.map(post => (
              <div
                key={post.id}
                className='card'
              >
                <h3 className='text-gray-800'>{post?.title}</h3>
                <p className='text-gray-800'>{truncateText(post.body, 300)}</p>
              </div>
            ))
          : <p className='text-center font-semibold'>
              User hasn&apos;t posted yet.
            </p>
          }
        </section>
      </div>
    )
  );
}
