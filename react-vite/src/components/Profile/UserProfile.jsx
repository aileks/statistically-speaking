import { useLoaderData } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import FollowButton from '../FollowButton';

export default function UserProfile() {
  const user = useLoaderData();
  const currentUser = useSelector(state => state.session.user);

  return (
    <div className='container'>
      <div className='card'>
        <section className='flex items-end justify-center gap-3'>
          <RxAvatar className='text-6xl text-blue-600' />
          <h2 className='text-gray-800'>
            {user.firstName} {user.lastName}
          </h2>
        </section>

        <p className='text-gray-400 text-center mb-0'>
          {user.followersCount}{' '}
          {user.followersCount === 1 ? 'Follower' : 'Followers'}
        </p>

        <section className='mb-4 pb-2 flex gap-4 justify-center border-b border-amber-400'>
          <h4 className='text-gray-600'>{user.field}</h4>
          <h4 className='text-gray-600'>{user.email}</h4>
        </section>

        {currentUser && (
          <FollowButton
            user={user}
            currentUser={currentUser}
          />
        )}

        <section className='mt-4 mb-0'>
          <h3 className='underline mb-0'>About Me</h3>
          <p className='text-gray-800 font-medium'>{user.bio}</p>
        </section>
      </div>
    </div>
  );
}
