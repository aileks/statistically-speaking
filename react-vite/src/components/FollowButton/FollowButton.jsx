import { RiUserFollowFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { useFetcher, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function FollowButton({ user }) {
  const currentUser = useSelector(state => state.session.user);
  const fetcher = useFetcher();
  const [isFollowing, setIsFollowing] = useState(
    currentUser.follows.includes(user.id)
  );
  const navigate = useNavigate();

  console.log('\n\n\nUSER VIEWING', user);
  console.log('\n\n\nCURRENT USER', currentUser);

  useEffect(() => {
    setIsFollowing(!isFollowing);
  }, [fetcher.data]);

  const handleFollow = async () => {
    if (!isFollowing) {
      await fetcher.submit(
        { userId: user.id },
        { method: 'POST', action: '/follow' }
      );
    } else {
      await fetcher.submit(
        { userId: user.id },
        { method: 'POST', action: '/unfollow' }
      );
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
