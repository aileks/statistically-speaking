export default function NotFound() {
  return (
    <div className='flex flex-col items-center mt-32'>
      <img
        src='/facepalm.png'
        alt='blue facepalming smiley'
        className='h-1/6 w-1/6'
      />
      <h1 className='text-red-600 font-3xl'>404</h1>
      <h2>Uh oh! We couldn&apos;t find that...</h2>
    </div>
  );
}
