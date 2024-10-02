import { useEffect, useState } from 'react';

export default function EditPost({ post, fetcher, setEditingPostId }) {
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedBody, setEditedBody] = useState(post.body);
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (editedBody === '' || editedTitle === '') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [editedBody, editedTitle]);

  const handleSave = id => {
    setErrors({});

    const newErrors = {};

    if (!editedTitle.length) {
      newErrors.title = 'Title is required';
    } else if (editedTitle.length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    } else if (editedTitle.length > 50) {
      newErrors.title = 'Title cannot be more than 50 characters';
    }

    if (!editedBody.length) {
      newErrors.body = 'Post body is required';
    } else if (editedBody.length < 10) {
      newErrors.body = 'Post must be at least 10 characters';
    } else if (editedBody.length > 500) {
      newErrors.body = 'Post cannot be more than 500 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        fetcher.submit(
          { id, title: editedTitle, body: editedBody },
          { method: 'PUT', action: '/edit' }
        );
      } catch (err) {
        console.error(err);
        setErrors({ message: err });
      }

      setEditingPostId(-1);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <input
        type='text'
        value={editedTitle}
        onChange={e => setEditedTitle(e.target.value)}
        className='rounded-lg border border-gray-400 bg-white p-3'
      />

      {errors.title && (
        <p className='text-sm italic text-red-500'>{errors.title}</p>
      )}

      <textarea
        value={editedBody}
        onChange={e => setEditedBody(e.target.value)}
        rows={5}
        className='rounded-lg border border-gray-400 bg-white p-3'
      />
      {errors.body && (
        <p className='text-sm italic text-red-500'>{errors.body}</p>
      )}

      {errors.message && (
        <p className='text-sm italic text-red-500'>{errors.message}</p>
      )}

      <div className='self-end space-x-3'>
        <button
          onClick={() => handleSave(post.id)}
          className='btn-save disabled:cursor-not-allowed disabled:opacity-50'
          disabled={disabled}
        >
          Save
        </button>

        <button
          onClick={() => setEditingPostId(null)}
          className='btn-delete'
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
