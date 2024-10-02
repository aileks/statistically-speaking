import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';

export default function Navigation() {
  return (
    <nav className="border-b border-blue-500 bg-white shadow-md py-4 px-4">
      <ul className="flex items-center justify-between">
        <li className="flex items-center">
          <img
            src="/brain_logo.jpg"
            className="h-10 w-10 rounded-full"
            alt="logo image"
          />

          <NavLink
            to="/"
            className="ml-2 text-blue-600 hover:text-blue-400 font-medium transition duration-200"
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