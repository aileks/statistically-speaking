import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiUserFollowFill } from 'react-icons/ri';

export default function Following() {
  const user = useSelector(state => state.session.user);

  if (!user?.following?.length) {
    return (
      <p className='text-center text-gray-600'>
        You are not following anyone yet.
      </p>
    );
  }

  return (
    <div className='container mx-auto px-4 mt-8'>
      <h2 className='mb-4 text-xl font-semibold'>Following</h2>

      <ul className='space-y-4 bg-white rounded-md shadow-md'>
        {user.following.map(followedUser => (
          <li
            key={followedUser.id}
            className='flex items-center gap-4 p-4'
          >
            <RiUserFollowFill className='text-2xl text-blue-600' />
            <Link
              to={`/user/${followedUser.id}`}
              className='text-lg text-blue-600 transition-all duration-200 hover:text-blue-800 hover:underline'
            >
              {followedUser.username}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
