import { useState } from 'react';
import { thunkLogin } from '../../redux/session';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleDemoLogin = async e => {
    e.preventDefault();

    const serverResponse = await dispatch(
      thunkLogin({
        email: 'demo@example.com',
        password: 'password',
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

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
      closeModal();
    }
  };

  return (
    <div className='px-10 py-8'>
      <h1>Log In</h1>

      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit}
      >
        <label className='flex flex-col'>
          Email
          <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className='rounded-md border border-gray-400 p-1'
          />
        </label>
        {errors.email && <p>{errors.email}</p>}

        <label className='flex flex-col'>
          Password
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className='rounded-md border border-gray-400 p-1'
          />
        </label>
        {errors.password && <p>{errors.password}</p>}

        <button
          type='submit'
          className='mt-5 flex-shrink-0 flex-grow-0 self-center btn'
        >
          Log In
        </button>

        <button
          onClick={e => handleDemoLogin(e)}
          className='flex-shrink-0 flex-grow-0 self-center btn'
        >
          Demo Log In
        </button>
      </form>
    </div>
  );
}

export default LoginFormModal;
