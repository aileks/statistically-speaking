import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { thunkSignup } from '../../redux/session';
import './SignupForm.css';

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword:
          'Confirm Password field must be the same as the Password field',
      });
    }

    const serverResponse = await dispatch(
      thunkSignup({
        email,
        username,
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
      <h1>Sign Up</h1>
      {errors.message && <p>{errors.message}</p>}

      <form
        className='flex w-64 flex-col gap-4'
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
          Username
          <input
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            className='rounded-md border border-gray-400 p-1'
          />
        </label>
        {errors.username && <p>{errors.username}</p>}

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

        <label className='flex flex-col'>
          Confirm Password
          <input
            type='password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
            className='rounded-md border border-gray-400 p-1'
          />
        </label>
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

        <button
          type='submit'
          className='mt-5 flex-shrink-0 flex-grow-0 self-center btn'
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupFormModal;
