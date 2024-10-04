import { useModal } from '../../context/Modal.jsx';

export default function DeleteModal({ onDelete }) {
  const { closeModal } = useModal();

  return (
    <div className='p-6'>
      <h2 className='text-xl font-semibold'>Are you sure?</h2>

      <p className='mt-2 font-bold italic'>This action cannot be undone!</p>

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
