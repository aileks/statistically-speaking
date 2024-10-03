import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';

export default function Navigation() {
  return (
    <nav className='border-b border-blue-500 bg-white px-4 py-4 shadow-md'>
      <ul className='flex items-center justify-between'>
        <li className='flex items-center'>
          <img
            src='/brain_logo.jpg'
            className='h-10 w-10 rounded-full'
            alt='logo image'
          />

          <NavLink
            to='/'
            className='ml-2 font-medium text-gray-700 transition-colors duration-200 ease-in-out hover:text-blue-600'
          >
            Home
          </NavLink>
        </li>

        <li className='text-3xl font-cursive'>Statistically Speaking</li>

        <li>
          <ProfileButton />
        </li>
      </ul>
    </nav>
  );
}
