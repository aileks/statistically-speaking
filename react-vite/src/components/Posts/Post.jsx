import { useState } from 'react';
import { useFetcher, useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Post() {
  const post = useLoaderData();
  const fetcher = useFetcher();
  const user = useSelector(state => state.session.user);
  const [editingPostId, setEditingPostId] = useState(-1);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedBody, setEditedBody] = useState('');
  const [errors, setErrors] = useState({});

  const handleEdit = (e, post) => {
    e.preventDefault();
    setEditingPostId(post.id);
    setEditedTitle(post.title);
    setEditedBody(post.body);
  };

  const handleSave = id => {
    setErrors({});

    const newErrors = {};

    if (editedTitle.length === 0) {
      newErrors.title = 'Title is required';
    } else if (editedTitle.length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    } else if (editedTitle.length > 50) {
      newErrors.title = 'Title cannot be more than 50 characters';
    }

    if (editedBody.length === 0) {
      newErrors.boyd = 'Post body is required';
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

  const handleDelete = (e, id) => {
    e.preventDefault();

    if (window.confirm('Are you sure you want to delete this post?')) {
      fetcher.submit({ id }, { method: 'DELETE', action: '/delete' });
    }
  };

  return (
    <div className='container'>
      <div className='mt-14 card flex flex-col'>
        {editingPostId === post.id ?
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSave(post.id);
            }}
          >
            <input
              type='text'
              value={editedTitle}
              onChange={e => setEditedTitle(e.target.value)}
              className='rounded-lg border border-gray-400 bg-white p-3'
            />
            {errors.title && (
              <p className='text-red-500 text-sm italic'>{errors.title}</p>
            )}

            <textarea
              value={editedBody}
              onChange={e => setEditedBody(e.target.value)}
              rows={5}
              className='rounded-lg border border-gray-400 bg-white p-3'
            />
            {errors.body && (
              <p className='text-red-500 text-sm italic'>{errors.body}</p>
            )}

            {errors.message && (
              <p className='text-red-500 text-sm-italic'>{errors.message}</p>
            )}
            <button
              type='submit'
              className='btn-save'
              disabled={editedBody.length === 0 || editedTitle.length === 0}
            >
              Save
            </button>

            <button
              type='button'
              onClick={() => setEditingPostId(-1)}
              className='btn-cancel'
            >
              Cancel
            </button>
          </form>
        : <>
            <h2 className='font-bold underline'>{post.title}</h2>

            <p className='text-lg'>{post.body}</p>

            {user && user.id === post.user_id && (
              <div className='space-x-3 self-end'>
                <button
                  onClick={e => handleEdit(e, post)}
                  className='btn-edit'
                >
                  Edit
                </button>

                <button
                  onClick={e => handleDelete(e, post.id)}
                  className='btn-delete'
                >
                  Delete
                </button>
              </div>
            )}
          </>
        }
      </div>
    </div>
  );
}
