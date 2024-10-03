import { Link, useRouteError } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';

export default function ErrorBoundary() {
  const error = useRouteError();

  console.log(error);

  return (
    <div className='mt-44 flex flex-col items-center'>
      <img
        src='/thisisfine.gif'
        alt='animated dog in burning room'
        className='h-1/6 w-1/6 rounded'
      />
      <h1 className='mt-8'>Something went wrong...</h1>
      <h2 className='text-red-600'>{error.message}</h2>

      <Link
        to='/'
        className='flex items-center justify-center gap-1 text-lg font-semibold text-blue-600 hover:underline'
      >
        <BiLeftArrowAlt className='h-6 w-6' />
        Go Back
      </Link>
    </div>
  );
}
