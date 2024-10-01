import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';

function Navigation() {
  return (
    <ul className='relative mx-4 mt-4 flex justify-between border-b border-blue-500'>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>

      <li>
        <ProfileButton />
      </li>
    </ul>
  );
}

export default Navigation;
