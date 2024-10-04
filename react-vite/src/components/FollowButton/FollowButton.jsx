import { RiUserFollowFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

export default function FollowButton({ user }) {
  const currentUser = useSelector(state => state.session.user);
  return (
    <div className='flex rounded-md border w-fit items-center justify-center gap-1 px-2 py-1 cursor-pointer hover:bg-gray-200 transition-colors duration-200'>
      <RiUserFollowFill
        className={`text-2xl ${user.id in currentUser.follows ? 'text-blue-600' : 'text-gray-500'}`}
      />
      {user.id in currentUser.follows ? 'Unfollow' : 'Follow'}
    </div>
  );
}
