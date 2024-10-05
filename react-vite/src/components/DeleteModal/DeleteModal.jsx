import { useModal } from '../../context/Modal.jsx';

export default function DeleteModal({ onDelete }) {
  const { closeModal } = useModal();

  return (
    <div className='p-6'>
      <h2 className='text-xl font-semibold'>Are you sure?</h2>

      <p className='mt-2 font-bold italic'>This action cannot be undone!</p>

      <div className='mt-4 flex justify-end space-x-4'>
        <button
          className='rounded-md bg-gray-300 px-4 py-2 font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-400'
          onClick={closeModal}
        >
          Cancel
        </button>

        <button
          className='rounded-md bg-red-500 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-red-600'
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
