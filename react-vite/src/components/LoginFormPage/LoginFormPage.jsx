import { useState } from 'react';
import { thunkLogin } from '../../redux/session';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

function LoginFormPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  if (sessionUser)
    return (
      <Navigate
        to='/'
        replace={true}
      />
    );

  const handleSubmit = async e => {
    e.preventDefault();

    const serverResponse = await dispatch(
      thunkLogin({
        email,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <h1>Log In</h1>
      {errors.length > 0 &&
        errors.map(message => <p key={message}>{message}</p>)}
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && <p>{errors.email}</p>}

        <label>
          Password
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && <p>{errors.password}</p>}

        <button
          type='submit'
          className='rounded-2xl px-4 py-2 font-semibold text-white shadow transition duration-200 ease-in-out hover:bg-teal-700'
        >
          Log In
        </button>
      </form>
    </>
  );
}

export default LoginFormPage;
