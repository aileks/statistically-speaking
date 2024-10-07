import { useEffect, useState } from 'react';
import { RiUserFollowFill } from 'react-icons/ri';
import { useFetcher } from 'react-router-dom';
import { thunkRefreshUser } from '../../redux/session.js';
import { useDispatch } from 'react-redux';

export default function FollowButton({ userId, currentUser }) {
  const dispatch = useDispatch();
  const fetcher = useFetcher();
  const [isFollowing, setIsFollowing] = useState(
    currentUser?.following?.some(followedUser => followedUser.id === userId)
  );

  useEffect(() => {
    dispatch(thunkRefreshUser());
  }, [dispatch]);

  const handleFollow = async () => {
    setIsFollowing(prevState => !prevState);

    if (!isFollowing) {
      await fetcher.submit({ userId }, { method: 'POST', action: '/follow' });
    } else {
      await fetcher.submit({ userId }, { method: 'POST', action: '/unfollow' });
    }
  };

  return (
    <button
      onClick={handleFollow}
      className='flex w-fit cursor-pointer items-center justify-center gap-1 rounded-md border px-2 py-1 transition-colors duration-200 hover:bg-gray-200'
    >
      <RiUserFollowFill
        className={`text-2xl ${isFollowing ? 'text-blue-600' : 'text-gray-500'}`}
      />
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
}
