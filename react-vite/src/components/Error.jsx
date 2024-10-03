export default function Error() {
  return (
    <div className='flex flex-col items-center mt-32'>
      <img
        src='/thisisfine.gif'
        alt='animated dog in burning room'
        className='h-1/6 w-1/6 rounded'
      />
      <h1 className='text-red-600 font-3xl mt-8'>404</h1>
      <h2>Uh oh! We can&apos;t find that...</h2>
    </div>
  );
}
