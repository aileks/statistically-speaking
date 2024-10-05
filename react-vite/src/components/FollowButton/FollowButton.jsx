import { useEffect, useState } from 'react';
import { RiUserFollowFill } from 'react-icons/ri';
import { useFetcher } from 'react-router-dom';

export default function FollowButton({ userId, currentUser }) {
  const fetcher = useFetcher();
  const [isFollowing, setIsFollowing] = useState(
    currentUser.follows.includes(userId)
  );

  useEffect(() => {
    setIsFollowing(currentUser.follows.includes(userId));
  }, [currentUser.follows, userId]);

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
      className='flex rounded-md border w-fit items-center justify-center gap-1 px-2 py-1 cursor-pointer hover:bg-gray-200 transition-colors duration-200'
    >
      <RiUserFollowFill
        className={`text-2xl ${isFollowing ? 'text-blue-600' : 'text-gray-500'}`}
      />
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
}
