import { Link } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';

export default function NotFound() {
  return (
    <div className='mt-32 flex flex-col items-center'>
      <img
        src='/facepalm.png'
        alt='blue facepalming smiley'
        className='h-1/6 w-1/6'
      />
      <h1 className='text-red-600 font-3xl'>404</h1>
      <h2>Uh oh! We couldn&apos;t find that...</h2>

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
