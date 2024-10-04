import { useModal } from '../../context/Modal.jsx';

export default function DeleteModal({ onDelete }) {
  const { closeModal } = useModal();

  return (
    <div className='p-6'>
      <h2 className='text-xl font-semibold'>Hold Up!</h2>

      <p className='mt-2'>
        Are you sure you want to delete this post?{' '}
        <span className='font-bold italic'>This action cannot be undone</span>
      </p>

      <div className='mt-4 flex justify-end space-x-4'>
        <button
          className='bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-md hover:bg-gray-400 transition-colors duration-200'
          onClick={closeModal}
        >
          Cancel
        </button>

        <button
          className='bg-red-500 text-white font-medium px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200'
          onClick={() => {
            onDelete();
            closeModal();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
