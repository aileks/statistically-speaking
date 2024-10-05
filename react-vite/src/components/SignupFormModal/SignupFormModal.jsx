import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { thunkSignup } from '../../redux/session';
import './SignupForm.css';

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bio, setBio] = useState('');
  const [field, setField] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleErrors = () => {
    setErrors('');
    const newErrors = {};

    if (!email.length) {
      newErrors.email = 'Email is required';
    }
    if (!username.length) {
      newErrors.username = 'Username is required';
    }
    if (!firstName.length) {
      newErrors.firstName = 'First name is required';
    }
    if (!lastName.length) {
      newErrors.lastName = 'Last name is required';
    }
    if (!password.length) {
      newErrors.password = 'Password is required';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newErrors = handleErrors();

    if (Object.keys(newErrors).length === 0) {
      const serverResponse = await dispatch(
        thunkSignup({
          first_name: firstName,
          last_name: lastName,
          bio,
          field,
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
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center py-8 w-[600px]'>
      <h1>Sign Up</h1>

      {errors.message && (
        <p className='text-sm italic text-red-500'>{errors.message}</p>
      )}

      <form
        className='flex flex-col gap-4'
        onSubmit={handleSubmit}
      >
        <div className='flex items-center justify-between'>
          <label className='flex flex-col'>
            First Name
            <input
              type='text'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              className='rounded-md border border-gray-400 p-1'
              placeholder='First Name'
              required
            />
          </label>
          {errors.firstName && (
            <p className='text-sm italic text-red-500'>{errors.firstName}</p>
          )}

          <label className='flex flex-col'>
            Last Name
            <input
              type='text'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              className='rounded-md border border-gray-400 p-1'
              placeholder='Last Name'
              required
            />
          </label>
          {errors.lastName && (
            <p className='text-sm italic text-red-500'>{errors.lastName}</p>
          )}
        </div>

        <label className='flex flex-col'>
          Email
          <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='rounded-md border border-gray-400 p-1'
            placeholder='Email'
            required
          />
        </label>
        {errors.email && (
          <p className='text-sm italic text-red-500'>{errors.email}</p>
        )}

        <label className='flex flex-col w-[440px]'>
          Username
          <input
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
            className='rounded-md border border-gray-400 p-1'
            placeholder='Username'
            required
          />
        </label>
        {errors.username && (
          <p className='text-sm italic text-red-500'>{errors.username}</p>
        )}

        <label className='flex flex-col'>
          Bio (optional)
          <textarea
            value={bio}
            onChange={e => setBio(e.target.value)}
            rows={5}
            className='rounded-md border border-gray-400 p-1'
            placeholder='Tell us about yourself'
          />
        </label>
        {errors.bio && (
          <p className='text-sm italic text-red-500'>{errors.bio}</p>
        )}

        <label className='flex flex-col'>
          Occupational Field (optional)
          <input
            value={field}
            onChange={e => setField(e.target.value)}
            className='rounded-md border border-gray-400 p-1'
            placeholder="What's your industry?"
          />
        </label>
        {errors.field && (
          <p className='text-sm italic text-red-500'>{errors.field}</p>
        )}

        <label className='flex flex-col'>
          Password
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
            className='rounded-md border border-gray-400 p-1'
            required
          />
        </label>
        {errors.password && <p>{errors.password}</p>}

        <label className='flex flex-col'>
          Confirm Password
          <input
            type='password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder='Confirm Password'
            className='rounded-md border border-gray-400 p-1'
            required
          />
        </label>
        {errors.confirmPassword && (
          <p className='text-sm italic text-red-500'>
            {errors.confirmPassword}
          </p>
        )}

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
