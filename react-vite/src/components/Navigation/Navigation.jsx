import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';

export default function Navigation() {
  return (
    <nav className='border-b border-blue-500 bg-white shadow-md py-4 px-4'>
      <ul className='flex items-center justify-between'>
        <li>
          <NavLink
            to='/'
            className='text-blue-600 hover:text-blue-400 font-medium transition duration-200'
          >
            Home
          </NavLink>
        </li>

        <li>
          <ProfileButton />
        </li>
      </ul>
    </nav>
  );
}
