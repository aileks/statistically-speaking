import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import { thunkLogout } from '../../redux/session';
import OpenModalMenuItem from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector(store => store.session.user);
  const ulRef = useRef();

  const toggleMenu = e => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = e => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = e => {
    e.preventDefault();
    dispatch(thunkLogout());
    closeMenu();
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className='flex items-center text-gray-700 transition-colors duration-200 ease-in-out hover:text-blue-600'
        aria-label='User menu'
      >
        <FaUserCircle className='text-2xl' />
      </button>

      {showMenu && (
        <ul
          className='absolute right-0 z-10 mt-2 mr-2 w-fit rounded-md border border-gray-400 bg-white px-3 py-2 shadow-md'
          ref={ulRef}
        >
          {user ?
            <>
              <li className='font-semibold text-gray-900'>
                Hello, {user.username}!
              </li>
              <li className='text-gray-600'>{user.email}</li>
              <li className='mt-2'>
                <button
                  onClick={logout}
                  className='w-full text-left text-red-600 hover:text-red-800'
                >
                  Log Out
                </button>
              </li>
            </>
          : <>
              <OpenModalMenuItem
                itemText='Log In'
                onItemClick={closeMenu}
                modalComponent={<LoginFormModal />}
              />
              <OpenModalMenuItem
                itemText='Sign Up'
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
            </>
          }
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
