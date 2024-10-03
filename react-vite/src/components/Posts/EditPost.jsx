import { useEffect, useState } from 'react';

export default function EditPost({ post, fetcher, setEditingPostId }) {
  // const originalType = post.graph.type;
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedBody, setEditedBody] = useState(post.body);
  const [editedType, setEditedType] = useState(post.graph.type);
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data) {
      if (fetcher.data.message) {
        setErrors({ message: fetcher.data.message });
      } else {
        setEditingPostId(-1);
        fetcher.data = undefined;
      }
    }
  }, [fetcher.data, fetcher.state, setEditingPostId]);

  useEffect(() => {
    setDisabled(editedBody === '' || editedTitle === '');
  }, [editedBody, editedTitle]);

  const handleErrors = () => {
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
    } else if (editedBody.length > 1500) {
      newErrors.body = 'Post cannot be more than 1500 characters';
    }

    // if (
    //   originalType === 'table' &&
    //   (editedType === 'bar' || editedType === 'line')
    // ) {
    //   newErrors.type =
    //     "Graphs of type 'Bar' or 'Line' must have only two (2) columns";
    // }

    return newErrors;
  };

  const handleUpdate = async id => {
    setErrors({});
    const newErrors = handleErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await fetcher.submit(
        { id, title: editedTitle, body: editedBody, graph_type: editedType },
        { method: 'PUT', action: '/edit' }
      );
    } catch (err) {
      console.error(err);
      setErrors({
        message: err.message || 'An error occurred while creating the post',
      });
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

      <label>
        Graph Type:
        <select
          value={editedType}
          onChange={e => setEditedType(e.target.value)}
          className='rounded-lg border border-gray-400 bg-white px-1 ml-2'
        >
          <option value='table'>Table</option>
          <option value='bar'>Bar</option>
          <option value='line'>Line</option>
        </select>
      </label>

      {/*{errors.type && (*/}
      {/*  <p className='text-sm italic text-red-500'>{errors.type}</p>*/}
      {/*)}*/}
      {errors.message && (
        <p className='text-sm italic text-red-500'>{errors.message}</p>
      )}

      <div className='self-end space-x-3'>
        <button
          onClick={() => handleUpdate(post.id)}
          className='btn-save disabled:cursor-not-allowed disabled:opacity-50'
          disabled={disabled}
        >
          Save
        </button>

        <button
          onClick={() => setEditingPostId(-1)}
          className='btn-delete'
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
